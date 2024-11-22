import { Velo } from "../Velo";

describe('tests classe Velo', () => {
    it('Devrait retourner que le velo demarre', () => {
        const velo = new Velo();

        expect(velo.démarrer()).toEqual("Le vélo démarre...");
    });
});