import faker from 'faker'
import { Mappable } from './CustomMap'

export class Company implements Mappable{
  color: string = 'blue'
companyName:string
catchPhrase:string
location:{
  lat:number
  lng:number
}
constructor(){
  this.companyName = faker.company.companyName()
  this.catchPhrase = faker.company.catchPhrase()
  this.location ={
    lat:parseFloat(faker.address.latitude()),
    lng:parseFloat(faker.address.longitude())
  }
}
markerContent():string{
  return `
  <h1>CompanyName: ${this.companyName}</h1>
  <h3>catchPhrase: ${this.catchPhrase}</h3>

  `;
}
}