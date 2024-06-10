import { Injectable } from '@angular/core';
import { Cheval } from '../models/cheval';

@Injectable({
  providedIn: 'root'
})
export class ChevalServiceService {
  private listChevaux: Cheval[]= [];
  private readonly MAX_CHEVAUX: number = 10;

  constructor() { }

  /** Adds an object of type Cheval to an array
    * @param {Cheval} object - The object of type cheval that's going to be added to the list
    * @returns {void} 
  */
  addCheval(object: Cheval){
    this.listChevaux.push(object);
  }
  /** Removes a specific object from an array, by using the entered corresponding index of said object
    * @param {number} index - The object of type cheval that's going to be added to the list
    * @returns {void} 
  */
  removeChevalById(index: number){
    this.listChevaux.splice(index,1);
  }
  /** Clears the array of object horses
    * @param {void} 
    * @returns {void} 
  */
  clearChevaux(){
    this.listChevaux = [];   
  }
  /** Returns the array of horses
    * @param {number}
    * @returns {Cheval[]} Array of type object Cheval
  */ 
  getChevaux(){
    return this.listChevaux;
  }
  /** Gets a specific object of the array of horses by entering its index. If index is off the limits, the method returns undefined.
   * 
    * @param {number} index Index number of the element of the array that I want to get
    * @return {Cheval|undefined} Returns an element of type Cheval or undefined
  */
  getChevalById(index?: number ): Cheval | undefined{
      if(index === undefined || index> this.MAX_CHEVAUX){
        return undefined;
      }
      else {
        return this.listChevaux[index];
      }
  }
}
