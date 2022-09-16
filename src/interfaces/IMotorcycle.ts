import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const MotorcycleZodSchema = z.intersection(VehicleZodSchema, z.object({
  category: z.union([z.literal('Street'), z.literal('Custom'), z.literal('Trail')]),
  engineCapacity: z.number().int().min(1).max(2500),
}));

export type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;
