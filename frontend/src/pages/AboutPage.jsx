import React from "react";

function AboutPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Ton message a bien été envoyé, merci pour ton retour.");
  };

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        color: "#333",
        padding: "2em",
        lineHeight: "1.6",
        background: "linear-gradient(to right, #f3e7e9, #e3eeff)",
        minHeight: "100vh",
        margin: "auto",
        maxWidth: "800px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#555", marginBottom: "1em" }}>
        À propos de nous
      </h1>
      <p>
        Dans le sud ensoleillé de la France, une jeune entrepreneuse du nom de
        Marie avait un rêve...
      </p>
      <p>
        Un jour, elle rencontra Pierre, un ami doué pour la technologie et le
        commerce. Ils partageaient une vision commune : apporter à tous une mode
        de haute qualité, faite à la main. Ils décidèrent de combiner leurs
        compétences et de former une équipe.
      </p>
      <p>
        Ensemble, ils créèrent "The Closet" - une plateforme de commerce
        électronique dédiée à la mode artisanale du sud de la France. Chaque
        pièce est soigneusement confectionnée avec amour et souci du détail,
        reflétant la passion et le dévouement de ses créateurs.
      </p>
      <p>
        Aujourd'hui, "The Closet" est plus qu'une simple boutique - c'est une
        communauté d'amateurs de mode qui apprécient l'art de la confection de
        vêtements à la main. Nous vous invitons à nous rejoindre dans ce voyage
        et à découvrir la beauté de la mode faite à la main.
      </p>
      <h1 style={{ marginTop: "2em", marginBottom: "1em" }}>Contactez-nous</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          padding: "1em",
          borderRadius: "1em",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          type="text"
          placeholder="Votre nom"
          style={{
            padding: "0.5em",
            borderRadius: "0.5em",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          placeholder="Votre email"
          style={{
            padding: "0.5em",
            borderRadius: "0.5em",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          placeholder="Votre message"
          style={{
            padding: "0.5em",
            borderRadius: "0.5em",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5em",
            borderRadius: "0.5em",
            border: "none",
            backgroundColor: "#555",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default AboutPage;
