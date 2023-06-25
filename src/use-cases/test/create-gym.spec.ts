import { beforeEach, describe, expect, it } from "vitest"
import { RegisterUseCase } from "../register"
import { compare } from "bcryptjs"
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository"
import { CreateGymUseCase } from "../create-gym"

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe("Gym User Case", () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it("should be able to register", async () => {
    const { gym } = await sut.execute({
      title: "JS Gym",
      description: "",
      latitude: -27.2092052,
      longitude: -49.6401091,
      phone: "21972662427",
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
