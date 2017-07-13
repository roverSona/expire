/**
 *  @fileoverview   Constants used to define types of documents.
 *  @author         Mark H. Linehan
 *  @date           August 20, 2016
 *  @copyright      Quarule, Inc.
 *
 */

/**
 * All Quarule documents are stored in this collection
 */

const QuaruleCollection = new Meteor.Collection('Quarule');
export {QuaruleCollection};

/**
 * These are the standard document types.
 *
 *  @public
 *  @static
 *  @readonly
 */

// These types identify vocabulary documents.
export const vocabularyType = 'v';
export const termType = 't';
export const nounType = 'T';
export const properNounType = 'N';
export const massNounType = 'M';
export const unitType = 'U';
export const verbType = 'V';
export const propertyType = 'P';
export const adjectiveType = 'A';
export const adverbType = 'B';

export const allowedItemTypes = [
  vocabularyType,
  termType,
  nounType,
  properNounType,
  massNounType,
  unitType,
  verbType,
  propertyType,
  adjectiveType,
  adverbType,
];

// These types identify governance documents.
export const GAType = "GA";
export const GEType = "GE";

// This identifies selection documents
export const SelectionType = 'S';

/**
 * These are the standard vocabulary term types.
 *
 *  @public
 *  @static
 *  @readonly
 */
export const nounTypeTerm = 'nt';
export const nameTypeTerm = 'pt';
export const massTypeTerm = 'mt';
export const unitTypeTerm = 'ut';
export const verbTypeTerm = 'vt';
export const propertyTypeTerm = 'pt';
export const adjectiveTypeterm = 'at';
export const adverbTypeTerm = 'adt';


export const allowedTermTypes = [
  nounTypeTerm,
  nameTypeTerm,
  massTypeTerm,
  unitTypeTerm,
  verbTypeTerm,
  propertyTypeTerm,
  adjectiveTypeterm,
  adverbTypeTerm,
];

/**
 * Array that maps Term types to corresponding Item names.
 */
export const typeTermToItemName = {
  [nounTypeTerm]: 'Noun',
  [nameTypeTerm]: 'Name',
  [massTypeTerm]: 'Mass Noun',
  [unitTypeTerm]: 'Unit Noun',
  [verbTypeTerm]: 'Verb',
  [propertyTypeTerm]: 'Property',
  [adjectiveTypeterm]: 'Adjective',
  [adverbTypeTerm]: 'Adverb',
};

/**
 * Array that maps Term types to corresponding Item types.
 * This is used to determine the Item type given a Mongo Term document.
 */
export const typeTermToItemType = {
  [nounTypeTerm]: nounType,
  [nameTypeTerm]: properNounType,
  [massTypeTerm]: massNounType,
  [unitTypeTerm]: unitType,
  [verbTypeTerm]: verbType,
  [propertyTypeTerm]: propertyType,
  [adjectiveTypeterm]: adjectiveType,
  [adverbTypeTerm]: adverbType,
};


/**
 * Annotation type codes.
 */
export const defQREAnnotation = 'q';
export const defEngAnnotation = 'd';
export const commentAnnotation = 'n';
export const exampleAnnotation = 'e';

export const allowedAnnotationTypes = [
  defQREAnnotation,
  defEngAnnotation,
  commentAnnotation,
  exampleAnnotation,
];

/**
 * GE Annotation type codes.
 */
export const themeGEAnnotation = 't';
export const documentTypeGEAnnotation = 'D';
export const activitiesInScopeGEAnnotation = 'a';
export const noteGEAnnotation = 'n';

export const allowedGEAnnotationTypes = [
  themeGEAnnotation,
  documentTypeGEAnnotation,
  activitiesInScopeGEAnnotation,
  noteGEAnnotation,
];

/**
 * KCQ type codes.
 */
export const keyProgramQuestion = 'P';
export const keyControlQuestion = 'C';

export const allowedKCQTypes = [
  keyProgramQuestion,
  keyControlQuestion,
];