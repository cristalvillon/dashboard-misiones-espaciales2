import { z } from "zod";

export const missionSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  date: z.string().min(1, "La fecha es obligatoria"),
  status: z.enum(["pendiente", "en progreso", "completada"], {
    errorMap: () => ({ message: "Estado no válido" }),
  }),
});
