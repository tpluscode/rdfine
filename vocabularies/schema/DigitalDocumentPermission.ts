import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface DigitalDocumentPermission extends Schema.Intangible, RdfResource {
  grantee: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
  permissionType: Schema.DigitalDocumentPermissionType | undefined;
}

export function DigitalDocumentPermissionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DigitalDocumentPermissionClass extends IntangibleMixin(Resource) implements DigitalDocumentPermission {
    @property.resource()
    grantee: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
    @property()
    permissionType: Schema.DigitalDocumentPermissionType | undefined;
  }
  return DigitalDocumentPermissionClass
}

class DigitalDocumentPermissionImpl extends DigitalDocumentPermissionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DigitalDocumentPermission>) {
    super(arg, init)
    this.types.add(schema.DigitalDocumentPermission)
  }

  static readonly __mixins: Mixin[] = [DigitalDocumentPermissionMixin, IntangibleMixin];
}
DigitalDocumentPermissionMixin.appliesTo = schema.DigitalDocumentPermission
DigitalDocumentPermissionMixin.Class = DigitalDocumentPermissionImpl
