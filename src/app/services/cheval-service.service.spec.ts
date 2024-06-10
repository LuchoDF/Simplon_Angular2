import { TestBed } from '@angular/core/testing';
import { ChevalServiceService } from './cheval-service.service';
import { Cheval } from '../models/cheval';
describe('ChevalServiceService', () => {
  let service: ChevalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChevalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test ajout cheval', () => {
    let cheval = new Cheval("luchito",0,0);
    service.addCheval(cheval);
    expect(service.getChevaux().length).toEqual(1);
  });

  it('Test removing cheval by index', () => {
    //instantiate the horse and add it to the list
    let cheval = new Cheval("luchito",0,0);
    service.addCheval(cheval);
    //remove the horse
    let indexToRemove: number = 0;
    service.removeChevalById(indexToRemove);
    //check if the list on the specified index is undefined
    expect(service.getChevalById(indexToRemove)).toBeUndefined();
  });

  it('Test clear list of chevaux', () => {
    // add horses to the array
    let cheval1 = new Cheval("luchito1", 0, 0);
    let cheval2 = new Cheval("luchito2", 0, 0);
    service.addCheval(cheval1);
    service.addCheval(cheval2);
  
    // clear the array of horses
    service.clearChevaux();
  
    // Verify if the array is empty
    expect(service.getChevaux().length).toEqual(0);
  });

  it('Test get a horse by its Id', () => {
    // add horses to the array
    let cheval1 = new Cheval("luchito1", 0, 0);
    let cheval2 = new Cheval("luchito2", 0, 0);
    service.addCheval(cheval1);
    service.addCheval(cheval2);
     
    let index = 1;
    let chevalObtained = service.getChevalById(index);
  
    // Verify if I obtained the correct horse
    expect(chevalObtained).toEqual(cheval2);
  });

});
