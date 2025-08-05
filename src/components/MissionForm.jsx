import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { missionSchema } from "../schemas/missionSchema";
import { useMissions } from "../context/MissionContext";

export default function MissionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(missionSchema),
  });

  const { addMission } = useMissions();

  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = useCallback(async (data) => {
    setServerError("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:3001/api/misiones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setServerError(errorData.message || "Error al guardar la misión");
        return;
      }

      addMission(data);
      setSuccessMessage("✅ Misión guardada correctamente");
    } catch (error) {
      setServerError("❌ Error de red o del servidor, intenta más tarde.");
    }
  }, [addMission]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Agregar Misión</h2>

      <div>
        <label>Nombre:</label>
        <input {...register("name")} placeholder="Nombre de la misión" />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label>Fecha:</label>
        <input type="date" {...register("date")} />
        {errors.date && <p style={{ color: "red" }}>{errors.date.message}</p>}
      </div>

      <div>
        <label>Estado:</label>
        <select {...register("status")}>
          <option value="">Selecciona estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En progreso</option>
          <option value="completada">Completada</option>
        </select>
        {errors.status && <p style={{ color: "red" }}>{errors.status.message}</p>}
      </div>

      <button type="submit" style={{ marginTop: 10 }}>
        Guardar Misión
      </button>

      {serverError && <p style={{ color: "red", marginTop: 10 }}>{serverError}</p>}
      {successMessage && <p style={{ color: "green", marginTop: 10 }}>{successMessage}</p>}
    </form>
  );
}
