import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { InMemoryCheckInsRepository } from "@/repositories/in-memory/in-memory-check-ins-repository"
import { ValidateCheckInUseCase } from "../validate-check-in"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"
import { LateCheckInValidationError } from "../errors/late-check-in-validation"

let checkInsRepository: InMemoryCheckInsRepository
let sut: ValidateCheckInUseCase

describe("Validate Check-In User Case", () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new ValidateCheckInUseCase(checkInsRepository)

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("should be able to validate the check-in", async () => {
    const createCheckIn = await checkInsRepository.create({
      gym_Id: "gym-01",
      user_Id: "user-01",
    })

    const { checkIn } = await sut.execute({
      checkInId: createCheckIn.id,
    })

    expect(checkIn.validated_at).toEqual(expect.any(Date))
    expect(checkInsRepository.items[0].validated_at).toEqual(expect.any(Date))
  })

  it("should be able to validate an inexistent check-in", async () => {
    await expect(() =>
      sut.execute({
        checkInId: "inexistent-check-in-id",
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })

  it("should be able to validate the check-in after 20 minutes of its creation", async () => {
    vi.setSystemTime(new Date(2023, 0, 1, 13, 40))

    const createCheckIn = await checkInsRepository.create({
      gym_Id: "gym-01",
      user_Id: "user-01",
    })

    const twentyOneMinutsInMs = 1000 * 60 * 21

    vi.advanceTimersByTime(twentyOneMinutsInMs)

    await expect(() =>
      sut.execute({
        checkInId: createCheckIn.id,
      }),
    ).rejects.toBeInstanceOf(LateCheckInValidationError)
  })
})
