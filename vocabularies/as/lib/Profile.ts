import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Profile<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, rdfine.RdfResource<D> {
  describes: As.Object<D> | undefined;
}

export function ProfileMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Profile> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class ProfileClass extends ObjectMixin(Resource) implements Partial<Profile> {
    @rdfine.property.resource({ implicitTypes: [as.Object] })
    describes: As.Object | undefined;
  }
  return ProfileClass
}

class ProfileImpl extends ProfileMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Profile>) {
    super(arg, init)
    this.types.add(as.Profile)
  }

  static readonly __mixins: Mixin[] = [ProfileMixin, ObjectMixin];
}
ProfileMixin.appliesTo = as.Profile
ProfileMixin.Class = ProfileImpl

export const fromPointer = createFactory<Profile>([ObjectMixin, ProfileMixin], { types: [as.Profile] });
