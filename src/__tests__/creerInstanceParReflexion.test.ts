import { créerInstanceParRéflexion } from "../CreerInstanceParReflexion";
import "../ajouterAGlobal";

describe("Création d'instances par réflexion", () => {
  test("Créer une instance de Voiture", () => {
    const instance = créerInstanceParRéflexion("Voiture");
    expect(instance).toBeDefined();
    expect(instance.démarrer()).toBe("La voiture démarre...");
  });

  test("Créer une instance de Vélo", () => {
    const instance = créerInstanceParRéflexion("Velo");
    expect(instance).toBeDefined();
    expect(instance.démarrer()).toBe("Le vélo démarre...");
  });

  test("Lever une erreur pour une classe inexistante", () => {
    expect(() => créerInstanceParRéflexion("Avion")).toThrow(
      "Classe 'Avion' introuvable."
    );
  });
});
