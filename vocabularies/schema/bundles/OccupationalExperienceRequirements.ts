import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { OccupationalExperienceRequirementsMixin } from '../lib/OccupationalExperienceRequirements';

export const OccupationalExperienceRequirementsBundle = [
  IntangibleMixin as Mixin,
  OccupationalExperienceRequirementsMixin as Mixin];
