import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MathSolverMixin } from '../lib/MathSolver';
import { SolveMathActionMixin } from '../lib/SolveMathAction';

export const MathSolverBundle = [
  CreativeWorkMixin as Mixin,
  MathSolverMixin as Mixin,
  SolveMathActionMixin as Mixin];
