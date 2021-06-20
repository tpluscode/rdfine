import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ObjectMixin } from './Object';

export interface Profile<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
  describes: As.Object<D> | undefined;
}

export function ProfileMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Profile> & RdfResourceCore> & Base {
  @namespace(as)
  class ProfileClass extends ObjectMixin(Resource) implements Partial<Profile> {
    @property.resource({ implicitTypes: [as.Object] })
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
