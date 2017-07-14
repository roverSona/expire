import { QuaruleCollection ,GAType} from '/imports/api/common/constants'

const GAs = QuaruleCollection.find({type:'Run'},{ fields: {GAType:1}}).fetch();
export { GAs }
