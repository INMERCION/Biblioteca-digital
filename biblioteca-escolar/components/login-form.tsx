"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Por favor completa todos los campos")
      return
    }

    // Aquí iría la lógica de autenticación
    console.log("Iniciando sesión con:", { email, password })

    // Simulación de inicio de sesión exitoso
    alert("Inicio de sesión exitoso (simulación)")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Correo Institucional</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu.correo@institucion.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Contraseña</Label>
          <Button variant="link" className="p-0 h-auto text-xs" type="button">
            ¿Olvidaste tu contraseña?
          </Button>
        </div>
        <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>

      <Button type="submit" className="w-full">
        Iniciar Sesión
      </Button>
    </form>
  )
}
