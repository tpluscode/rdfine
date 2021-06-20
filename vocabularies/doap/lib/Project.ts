import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import type * as Foaf from '@rdfine/foaf';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Sioc from '@rdfine/sioc';
import { ProjectMixin as FoafProjectMixin } from '@rdfine/foaf/lib/Project';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';
import { PersonMixin as FoafPersonMixin } from '@rdfine/foaf/lib/Person';
import { ContainerMixin as SiocContainerMixin } from '@rdfine/sioc/lib/Container';
import { OrganizationMixin as FoafOrganizationMixin } from '@rdfine/foaf/lib/Organization';

export interface Project<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.Project<D>, RdfResource<D> {
  audience: RDF.Literal | undefined;
  blog: Rdfs.Resource<D> | undefined;
  'bug-database': RDF.Term | undefined;
  category: RDF.Term | undefined;
  developer: Foaf.Person<D> | undefined;
  'developer-forum': Sioc.Container<D> | undefined;
  documenter: Foaf.Person<D> | undefined;
  'download-mirror': RDF.Term | undefined;
  'download-page': RDF.Term | undefined;
  helper: Foaf.Person<D> | undefined;
  homepage: RDF.Term | undefined;
  implements: Doap.Specification<D> | undefined;
  language: RDF.Literal | undefined;
  'mailing-list': RDF.NamedNode | undefined;
  maintainer: Foaf.Person<D> | undefined;
  'old-homepage': RDF.Term | undefined;
  os: RDF.Literal | undefined;
  platform: RDF.Literal | undefined;
  'programming-language': RDF.Literal | undefined;
  release: Doap.Version<D> | undefined;
  repository: Doap.Repository<D> | undefined;
  screenshots: RDF.Term | undefined;
  'service-endpoint': Rdfs.Resource<D> | undefined;
  'support-forum': Sioc.Container<D> | undefined;
  tester: Foaf.Person<D> | undefined;
  translator: Foaf.Person<D> | undefined;
  vendor: Foaf.Organization<D> | undefined;
  wiki: RDF.NamedNode | undefined;
}

export function ProjectMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Project> & RdfResourceCore> & Base {
  @namespace(doap)
  class ProjectClass extends FoafProjectMixin(Resource) implements Partial<Project> {
    @property()
    audience: RDF.Literal | undefined;
    @property.resource({ as: [RdfsResourceMixin] })
    blog: Rdfs.Resource | undefined;
    @property()
    'bug-database': RDF.Term | undefined;
    @property()
    category: RDF.Term | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    developer: Foaf.Person | undefined;
    @property.resource({ as: [SiocContainerMixin] })
    'developer-forum': Sioc.Container | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    documenter: Foaf.Person | undefined;
    @property()
    'download-mirror': RDF.Term | undefined;
    @property()
    'download-page': RDF.Term | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    helper: Foaf.Person | undefined;
    @property()
    homepage: RDF.Term | undefined;
    @property.resource({ implicitTypes: [doap.Specification] })
    implements: Doap.Specification | undefined;
    @property()
    language: RDF.Literal | undefined;
    @property()
    'mailing-list': RDF.NamedNode | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    maintainer: Foaf.Person | undefined;
    @property()
    'old-homepage': RDF.Term | undefined;
    @property()
    os: RDF.Literal | undefined;
    @property()
    platform: RDF.Literal | undefined;
    @property()
    'programming-language': RDF.Literal | undefined;
    @property.resource({ implicitTypes: [doap.Version] })
    release: Doap.Version | undefined;
    @property.resource({ implicitTypes: [doap.Repository] })
    repository: Doap.Repository | undefined;
    @property()
    screenshots: RDF.Term | undefined;
    @property.resource({ as: [RdfsResourceMixin] })
    'service-endpoint': Rdfs.Resource | undefined;
    @property.resource({ as: [SiocContainerMixin] })
    'support-forum': Sioc.Container | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    tester: Foaf.Person | undefined;
    @property.resource({ as: [FoafPersonMixin] })
    translator: Foaf.Person | undefined;
    @property.resource({ as: [FoafOrganizationMixin] })
    vendor: Foaf.Organization | undefined;
    @property()
    wiki: RDF.NamedNode | undefined;
  }
  return ProjectClass
}

class ProjectImpl extends ProjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Project>) {
    super(arg, init)
    this.types.add(doap.Project)
  }

  static readonly __mixins: Mixin[] = [ProjectMixin, FoafProjectMixin];
}
ProjectMixin.appliesTo = doap.Project
ProjectMixin.Class = ProjectImpl

export const fromPointer = createFactory<Project>([FoafProjectMixin, ProjectMixin], { types: [doap.Project] });
