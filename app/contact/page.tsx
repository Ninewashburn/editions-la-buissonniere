"use client"

import type React from "react"

import { useState } from "react"
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Textarea,
  toast
} from "@/components/ui"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)

    // Afficher un message de confirmation
    toast({
      title: "Message envoyé",
      description: "Merci pour votre message. Nous vous répondrons dans les plus brefs délais.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title italic font-playfair">Me Contacter</h1>
      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-playfair text-2xl font-bold">Contactez André Lautier</h2>
          <p className="mb-6 text-gray-600">
            Vous souhaitez me contacter pour une dédicace, une interview, une invitation à un salon du livre ou
            simplement pour partager vos impressions sur mes romans ? N'hésitez pas à m'écrire via le formulaire
            ci-contre. Je m'efforce de répondre à tous les messages dans les meilleurs délais.
          </p>
          <div className="mb-8">
            <h3 className="mb-2 font-playfair text-xl font-bold">Éditions La Buissonnière</h3>
            <address className="not-italic text-gray-600">
              <p>12 rue des Écrivains</p>
              <p>63000 Clermont-Ferrand</p>
              <p>France</p>
              <p className="mt-4">Email : contact@editionslabuissonniere.fr</p>
            </address>
          </div>
          <div>
            <h3 className="mb-2 font-playfair text-xl font-bold">Réseaux sociaux</h3>
            <p className="text-gray-600">
              Retrouvez-moi également sur les réseaux sociaux pour suivre mon actualité et échanger avec moi.
            </p>
            <div className="mt-4 flex space-x-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                Facebook
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                Twitter
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                Instagram
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Formulaire de contact</CardTitle>
              <CardDescription>
                Remplissez ce formulaire pour m'envoyer un message. Tous les champs sont obligatoires.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

