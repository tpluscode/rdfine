declare module 'clownface/lib/Clownface' {
  import { Term, BlankNode, NamedNode, Literal } from 'rdf-js'

  type TermOrClownface = Clownface | Term;
  type TermOrLiteral = TermOrClownface | string | number | boolean;

  type AddCallback<X extends Term> = (added: Clownface<X>) => void;
  type SingleOrArray<T> = T | T[]

  type SingleOrArrayOfTerms = SingleOrArray<TermOrClownface>
  type SingleOrArrayOfTermsOrLiterals = SingleOrArray<TermOrLiteral>

  interface Clownface<T extends Term = Term> {
    term: T | null;
    terms: T[];
    value: string | null;
    values: string[];
    dataset: any;
    datasets: any[];
    list: Iterator<Term>;
    toArray(): Clownface<T>[];
    filter(cb: (quad: Clownface<T>) => boolean): Clownface<T>;
    forEach(cb: (quad: Clownface<T>) => void): void;
    map<X>(cb: (quad: Clownface<T>, index: number) => X): X[];

    toString(): string;
    node<X extends Term = Term> (values: any, { type, datatype, language }?: any): Clownface<X>;
    blankNode (values?: any): Clownface<BlankNode>;
    literal (values: any, languageOrDatatype?: string | NamedNode): Clownface<Literal>;
    namedNode (values: any): Clownface<NamedNode>;
    in<X extends Term = Term> (predicates: SingleOrArrayOfTerms): Clownface<X>;
    out<X extends Term = Term> (predicates: SingleOrArrayOfTerms): Clownface<X>;

    has<X extends Term = Term> (predicates: SingleOrArrayOfTerms): Clownface<X>;
    has<X extends Term = Term> (predicates: SingleOrArrayOfTerms, objects: SingleOrArrayOfTermsOrLiterals): Clownface<X>;

    addIn<X extends Term = Term> (predicates: SingleOrArrayOfTerms): Clownface<X>;
    addIn<X extends Term = Term> (predicates: SingleOrArrayOfTerms, objectsOrCallback: SingleOrArrayOfTermsOrLiterals | AddCallback<X>): Clownface<X>;
    addIn<X extends Term = Term> (predicates: SingleOrArrayOfTerms, objects: SingleOrArrayOfTermsOrLiterals, callback: AddCallback<X>): Clownface<X>;

    addOut<X extends Term = Term> (predicates: SingleOrArrayOfTerms): Clownface<X>;
    addOut<X extends Term = Term> (predicates: SingleOrArrayOfTerms, objectsOrCallback: SingleOrArrayOfTermsOrLiterals | AddCallback<X>): Clownface<X>;
    addOut<X extends Term = Term> (predicates: SingleOrArrayOfTerms, objects: SingleOrArrayOfTermsOrLiterals, callback: AddCallback<X>): Clownface<X>;

    addList<X extends Term = Term> (predicates: SingleOrArrayOfTerms, objects?: any, callback?: AddCallback<X>): Clownface<X>;

    deleteIn<X extends Term = Term> (predicates: SingleOrArrayOfTerms): Clownface<X>;
    deleteOut<X extends Term = Term> (predicates: SingleOrArrayOfTerms): Clownface<X>;
    deleteList<X extends Term = Term> (predicates: SingleOrArrayOfTerms): Clownface<X>;
  }

  class Clownface<T extends Term = Term> implements Clownface<T> {
    public constructor(o: { term?: Term | null; dataset?: any; _context?: unknown });
    public readonly _context: unknown;
  }

  export = Clownface
}
