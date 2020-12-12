import RdfResourceImpl from './RdfResource'

export { crossBoundaries } from './lib/path'
export type { Constructor, ExtendingConstructor, ResourceIndexer } from './lib/ResourceFactory'
export { default as ResourceFactory } from './lib/ResourceFactory'
export type { RdfResource, ResourceIdentifier } from './RdfResource'
export * from './lib/decorators'
export default RdfResourceImpl
