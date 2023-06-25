import { Prisma, Gym } from "@prisma/client"

export interface FindManyNearbyParams {
  latitude: number
  longitude: number
}

interface GymsRepository {
  findById(id: string): Promise<Gym | null>
  findManyNearby(params: FindManyNearbyParams): Promise<Gym[]>
  create(data: Prisma.GymCreateInput): Promise<Gym>
  searchMany(query: string, page: number): Promise<Gym[]>
}
