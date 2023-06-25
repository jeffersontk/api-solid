import { Gym } from "@prisma/client"
import { GymsRepository } from "@/repositories/gyms-repository"

interface RegisterCreateGymRequest {
  title: string
  description: string | null
  phone: string | null
  latitude: number
  longitude: number
}

interface RegisterCreateGymResponse {
  gym: Gym
}

export class CreateGymUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    description,
    latitude,
    longitude,
    phone,
    title,
  }: RegisterCreateGymRequest): Promise<RegisterCreateGymResponse> {
    const gym = await this.gymsRepository.create({
      description,
      latitude,
      longitude,
      phone,
      title,
    })

    return { gym }
  }
}
