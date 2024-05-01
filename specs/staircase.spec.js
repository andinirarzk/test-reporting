import { expect } from "chai";
import staircase from "../staircase.js"

describe('staircase check', function(){
    it('K_01 - Parameter n bukan integer', function(){
        const check = staircase('test',' ', '#')
        expect(check).to.equal('parameter n tidak boleh selain number');
    })

    it('K_02 - Parameter n melebihi 100', function(){
        const check = staircase(101,' ', '#')
        expect(check).to.equal('parameter n tidak boleh melebihi 100');
    })

    it('K_03 - Parameter tipe (2) selain pagar', function(){
        const check = staircase(50, ' ', '*')
        expect(check).to.equal('parameter tipe (2) tidak boleh selain pagar');
    })

    it('K_04 - Hasil sesuai', function(){
        // membuat staircase ditentukan n nya berapa
        let n = 4; 
        let baris = "";

        for (let i = 1; i <= n; i++) {
          for (let j = 1; j <= n - i; j++) {
            baris += " "; 
          }
          for (let k = 1; k <= i; k++) {
            baris += "#";
          }
          baris += "\n"; 
        }
        const check = staircase(n,' ', '#')
        expect(check).to.equal(baris);
    })

    it('K_05 - Parameter tipe (1) selain spasi', function(){
        const check = staircase(50,'-', '#')
        expect(check).to.equal('parameter tipe (1) tidak boleh selain spasi');
    })

    it('K_06 - Parameter n minimal 1', function(){
        const check = staircase(0,' ', '#')
        expect(check).to.equal('parameter n minimal 1');
    })

})