import { Voiture } from "../Voiture";

describe('tests classe Voiture', () => {
    it('Devrait retourner que la voiture demarre', () => {
        const voiture = new Voiture();

        expect(voiture.démarrer()).toEqual("La voiture démarre...");
    });
});