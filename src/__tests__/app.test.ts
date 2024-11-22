import "../ajouterAGlobal";
import { créerInstanceParRéflexion } from "../CreerInstanceParReflexion";

describe("Utilisation des variables d'environnement", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("Instancier une classe définie dans la variable d'environnement", () => {
    process.env.NOM_CLASSE = "Voiture";
    const instance = créerInstanceParRéflexion(process.env.NOM_CLASSE!);
    expect(instance.démarrer()).toBe("La voiture démarre...");
  });

  test("Lever une erreur si NOM_CLASSE est vide", () => {
    delete process.env.NOM_CLASSE;
    expect(() => {
      créerInstanceParRéflexion(process.env.NOM_CLASSE!);
    }).toThrow("Classe 'undefined' introuvable.");
  });
});
