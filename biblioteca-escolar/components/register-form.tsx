"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    career: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCareerChange = (value: string) => {
    setFormData((prev) => ({ ...prev, career: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validación básica
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        setError("Por favor completa todos los campos")
        return
      }
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    // Validar que el correo sea institucional
    if (!formData.email.includes(".edu")) {
      setError("Debes usar un correo institucional")
      return
    }

    // Aquí iría la lógica de registro
    console.log("Registrando usuario:", formData)

    // Simulación de registro exitoso
    alert("Registro exitoso (simulación)")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nombre</Label>
          <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Apellido</Label>
          <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Fecha de Nacimiento</Label>
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="career">Carrera</Label>
        <Select onValueChange={handleCareerChange} required>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona tu carrera" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ingenieria">Ingeniería</SelectItem>
            <SelectItem value="medicina">Medicina</SelectItem>
            <SelectItem value="derecho">Derecho</SelectItem>
            <SelectItem value="educacion">Educación</SelectItem>
            <SelectItem value="administracion">Administración</SelectItem>
            <SelectItem value="otra">Otra</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Correo Institucional</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tu.correo@institucion.edu"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Repetir Contraseña</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Registrarse
      </Button>
    </form>
  )
}
