 import { User } from "./user";
 import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
const user = new User();
const company = new Company();
console.log(company);

const customMap = new CustomMap('maps')
customMap.addUserMarker(user);
customMap.addCompanyMarker(company)