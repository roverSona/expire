import { QuaruleCollection ,GAType} from '/imports/api/common/constants'

const Organisations = QuaruleCollection.find({type:'Organization'},{ fields: {'organizationName':1}}).fetch();
//console.log(Organisations)
export { Organisations }
