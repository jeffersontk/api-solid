import { beforeEach, describe, expect, it } from "vitest"
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository"
import { AuthenticateUseCase } from "../authenticate"
import { hash } from "bcryptjs"
import { InvalidCredentialsError } from "../errors/invalid-credentials-error"

let usersRepository: InMemoryUsersRepository
let sut: AuthenticateUseCase

describe("Authenticate User Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })

  it("should be able to authenticate", async () => {
    await usersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password_hash: await hash("123abc", 6),
    })

    const { user } = await sut.execute({
      email: "johndoe@example.com",
      password: "123abc",
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it("should be able to authenticate with wrong email", async () => {
    await expect(() =>
      sut.execute({
        email: "johndoe@example.com",
        password: "123abc",
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it("should be able to authenticate with wrong password", async () => {
    await usersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password_hash: await hash("123abc", 6),
    })

    await expect(() =>
      sut.execute({
        email: "johndoe@example.com",
        password: "321321",
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
