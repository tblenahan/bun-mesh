// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { OpenBreweryDbTypes } from './sources/OpenBreweryDB/types';
import type { GeoDbTypes } from './sources/GeoDB/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number; }
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number; }
  /** Represents empty values */
  Void: { input: void; output: void; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: URL | string; output: URL | string; }
  ObjMap: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  ResolveToSourceArgs: { input: any; output: any; }
};

export type Query = {
  breweries?: Maybe<Array<Maybe<query_breweries_items>>>;
  /**
   * Find administrative divisions, filtering by optional criteria. If no criteria are set, you will get back all
   * known divisions.
   *
   */
  findAdminDivisions?: Maybe<findAdminDivisionsUsingGET_response>;
  /**
   * Get administrative division details such as location coordinates, population, and
   * elevation above sea-level (if available).
   *
   */
  getAdminDivision?: Maybe<getAdminDivisionUsingGET_response>;
  /**
   * Find cities near the given administrative division, filtering by optional criteria. If no criteria are set, you
   * will get back all known cities.
   *
   */
  findCitiesNearAdminDivision?: Maybe<findCitiesNearAdminDivisionUsingGET_response>;
  /**
   * Find administrative divisions near the given division, filtering by optional criteria. If no criteria
   * are set, you will get back all known divisions.
   *
   */
  findDivisionsNearAdminDivision?: Maybe<findDivisionsNearAdminDivisionUsingGET_response>;
  /**
   * Find places near the given administrative division, filtering by optional criteria. If no criteria are set, you
   * will get back all known places.
   *
   */
  findPlacesNearAdminDivision?: Maybe<findPlacesNearAdminDivisionUsingGET_response>;
  /**
   * Find cities, filtering by optional criteria. If no criteria are set, you will get back all known cities.
   *
   */
  findCities?: Maybe<findCitiesUsingGET_response>;
  /**
   * Find cities near the given city, filtering by optional criteria. If no criteria are set, you will get
   * back all cities within the default radius.
   *
   */
  findCitiesNearCity?: Maybe<findCitiesNearCityUsingGET_response>;
  /**
   * Find administrative divisions near the given city, filtering by optional criteria. If no criteria are set, you will get
   * back all divisions within the default radius.
   *
   */
  findDivisionsNearCity?: Maybe<findDivisionsNearCityUsingGET_response>;
  /**
   * Find places near the given city, filtering by optional criteria. If no criteria are set, you will get
   * back all places within the default radius.
   *
   */
  findPlacesNearCity?: Maybe<findPlacesNearCityUsingGET_response>;
  /**
   * Get city details such as location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getCity?: Maybe<getCityUsingGET_response>;
  /** Get distance from the given city */
  getCityDistance?: Maybe<getCityDistanceUsingGET_response>;
  /** Get city date-time */
  getCityDateTime?: Maybe<getCityDateTimeUsingGET_response>;
  /**
   * Get the details for the containing populated place (e.g., its county or other administrative division), including location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getCityLocatedIn?: Maybe<getCityLocatedInUsingGET_response>;
  /** Get city time */
  getCityTime?: Maybe<getCityTimeUsingGET_response>;
  /**
   * Find countries, filtering by optional criteria. If no criteria are set, you will get back all known countries.
   *
   */
  getCountries?: Maybe<getCountriesUsingGET_response>;
  /** Get country details such as number of regions. */
  getCountry?: Maybe<getCountryUsingGET_response>;
  /**
   * Get the country's places. The country is omitted in the response.
   *
   */
  findCountryPlaces?: Maybe<findCountryPlacesUsingGET_response>;
  /**
   * Get the country's regions. These could be states, provinces, districts, or otherwise major
   * political divisions.
   *
   */
  getRegions?: Maybe<getRegionsUsingGET_response>;
  /** Get country region details such as number of cities. */
  getRegion?: Maybe<getRegionUsingGET_response>;
  /**
   * Get country region administrative divisions. The country and region info is omitted in the
   * response.
   *
   */
  findRegionDivisions?: Maybe<findRegionDivisionsUsingGET_response>;
  /**
   * Get country region cities. The country and region info is omitted in the response.
   *
   */
  findRegionCities?: Maybe<findRegionCitiesUsingGET_response>;
  /**
   * Get country region places. The country and region info is omitted in the response.
   *
   */
  findRegionPlaces?: Maybe<findRegionPlacesUsingGET_response>;
  /**
   * Find cities near the given location, filtering by optional criteria. If no criteria are set, you will get back
   * all cities within the default radius.
   *
   */
  findCitiesNearLocation?: Maybe<findCitiesNearLocationUsingGET_response>;
  /**
   * Find administrative divisions near the given location, filtering by optional criteria. If no criteria are set,
   * you will get back all divisions within the default radius.
   *
   */
  findDivisionsNearLocation?: Maybe<findDivisionsNearLocationUsingGET_response>;
  /**
   * Find places near the given location, filtering by optional criteria. If no criteria are set, you will get back
   * all places within the default radius.
   *
   */
  findPlacesNearLocation?: Maybe<findPlacesNearLocationUsingGET_response>;
  /**
   * Find places, filtering by optional criteria. If no criteria are set, you will get back all known places.
   *
   */
  findPlaces?: Maybe<findPlacesUsingGET_response>;
  /**
   * Find places near the given place, filtering by optional criteria. If no criteria are set, you will get
   * back all places within the default radius.
   *
   */
  findPlacesNearPlace?: Maybe<findPlacesNearPlaceUsingGET_response>;
  /**
   * Get place details such as location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getPlace?: Maybe<getPlaceUsingGET_response>;
  /** Get distance from the given place */
  getPlaceDistance?: Maybe<getPlaceDistanceUsingGET_response>;
  /** Get place date-time */
  getPlaceDateTime?: Maybe<getPlaceDateTimeUsingGET_response>;
  /**
   * Get the details for the containing populated place (e.g., its county or other administrative division), including location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getPlaceLocatedIn?: Maybe<getPlaceLocatedInUsingGET_response>;
  /** Get place time */
  getPlaceTime?: Maybe<getPlaceTimeUsingGET_response>;
  /** Find currencies, filtering by optional criteria. If no criteria are set, you will get back all known currencies. */
  getCurrencies?: Maybe<getCurrenciesUsingGET_response>;
  /** Get all supported languages */
  getLanguages?: Maybe<getLanguagesUsingGET_response>;
  /** Get all known locales */
  getLocales?: Maybe<getLocalesUsingGET_response>;
  /** Get all known time-zones */
  getTimezones?: Maybe<getTimezonesUsingGET_response>;
  /** Get time-zone */
  getTimeZone?: Maybe<getTimeZoneUsingGET_response>;
  /** Get time-zone date-time */
  getTimeZoneDateTime?: Maybe<getTimeZoneDateTimeUsingGET_response>;
  /** Get time-zone time */
  getTimeZoneTime?: Maybe<getTimeZoneTimeUsingGET_response>;
};


export type QuerybreweriesArgs = {
  byCity?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindAdminDivisionsArgs = {
  location?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetAdminDivisionArgs = {
  divisionId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindCitiesNearAdminDivisionArgs = {
  divisionId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindDivisionsNearAdminDivisionArgs = {
  divisionId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindPlacesNearAdminDivisionArgs = {
  divisionId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindCitiesArgs = {
  location?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindCitiesNearCityArgs = {
  cityId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindDivisionsNearCityArgs = {
  cityId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindPlacesNearCityArgs = {
  cityId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCityArgs = {
  cityId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCityDistanceArgs = {
  cityId: Scalars['String']['input'];
  toCityId: Scalars['String']['input'];
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCityDateTimeArgs = {
  cityId: Scalars['String']['input'];
};


export type QuerygetCityLocatedInArgs = {
  cityId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCityTimeArgs = {
  cityId: Scalars['String']['input'];
};


export type QuerygetCountriesArgs = {
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCountryArgs = {
  countryId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindCountryPlacesArgs = {
  countryId: Scalars['String']['input'];
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetRegionsArgs = {
  countryId: Scalars['String']['input'];
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetRegionArgs = {
  countryId: Scalars['String']['input'];
  regionCode: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindRegionDivisionsArgs = {
  countryId: Scalars['String']['input'];
  regionCode: Scalars['String']['input'];
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindRegionCitiesArgs = {
  countryId: Scalars['String']['input'];
  regionCode: Scalars['String']['input'];
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindRegionPlacesArgs = {
  countryId: Scalars['String']['input'];
  regionCode: Scalars['String']['input'];
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindCitiesNearLocationArgs = {
  locationId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindDivisionsNearLocationArgs = {
  locationId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindPlacesNearLocationArgs = {
  locationId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindPlacesArgs = {
  location?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindPlacesNearPlaceArgs = {
  placeId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetPlaceArgs = {
  placeId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetPlaceDistanceArgs = {
  placeId: Scalars['String']['input'];
  toPlaceId: Scalars['String']['input'];
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetPlaceDateTimeArgs = {
  placeId: Scalars['String']['input'];
};


export type QuerygetPlaceLocatedInArgs = {
  placeId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetPlaceTimeArgs = {
  placeId: Scalars['String']['input'];
};


export type QuerygetCurrenciesArgs = {
  countryId: Scalars['String']['input'];
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetLanguagesArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetLocalesArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetTimezonesArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetTimeZoneArgs = {
  zoneId: Scalars['String']['input'];
};


export type QuerygetTimeZoneDateTimeArgs = {
  zoneId: Scalars['String']['input'];
};


export type QuerygetTimeZoneTimeArgs = {
  zoneId: Scalars['String']['input'];
};

export type query_breweries_items = {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  brewery_type?: Maybe<Scalars['String']['output']>;
  address_1?: Maybe<Scalars['String']['output']>;
  address_2?: Maybe<Scalars['Void']['output']>;
  address_3?: Maybe<Scalars['Void']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  state_province?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  website_url?: Maybe<Scalars['URL']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export type findAdminDivisionsUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response;

/** A list of populated places */
export type Populated_Places_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<PopulatedPlaceSummary>>>;
};

/** An error that occurred processing the request */
export type Error = {
  code?: Maybe<ErrorCode>;
  message?: Maybe<Scalars['String']['output']>;
};

/**
 * One of a set of enumerated error codes representing the types of errors that can occur processing a
 * request
 */
export type ErrorCode =
  | 'ACCESS_DENIED'
  | 'ENTITY_NOT_FOUND'
  | 'INCOMPATIBLE'
  | 'PARAM_INVALID'
  | 'PARAMS_MUTUALLY_EXCLUSIVE'
  | 'REQUEST_UNPROCESSABLE';

/** A HATEAOS link */
export type Link = {
  href?: Maybe<Scalars['String']['output']>;
  rel?: Maybe<Scalars['String']['output']>;
};

/** Result metadata (currently only associated with collection results) */
export type Metadata = {
  /** The zero-ary offset into the results (0 is the first result) */
  currentOffset?: Maybe<Scalars['BigInt']['output']>;
  /** The total number of results across pages */
  totalCount?: Maybe<Scalars['BigInt']['output']>;
};

/** Minimal populated-place info */
export type PopulatedPlaceSummary = {
  /** The city name (legacy) */
  city?: Maybe<Scalars['String']['output']>;
  /** The country name (varies by languageCode) */
  country?: Maybe<Scalars['String']['output']>;
  /** The ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Included if this is the result of a distance query */
  distance?: Maybe<Scalars['Float']['output']>;
  /** The place GeoDB native id */
  id?: Maybe<Scalars['Int']['output']>;
  /** The place latittude (-90.0 to 90.0) */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The place longitude (-180.0 to 180.0) */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** The place name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The place population */
  population?: Maybe<Scalars['Int']['output']>;
  /** The region name (varies by languageCode) */
  region?: Maybe<Scalars['String']['output']>;
  /** The ISO or FIPS region code */
  regionCode?: Maybe<Scalars['String']['output']>;
  /** The region Wikidata id */
  regionWdId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PopulatedPlaceType>;
  /** The place WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
  breweries?: Maybe<Array<Maybe<query_breweries_items>>>;
};

/**
 * One of a set of enumerated populated-place types known by the service (currently only level-2 admin divisions and
 * cities)
 */
export type PopulatedPlaceType =
  | 'ADM2'
  | 'CITY'
  | 'ISLAND';

/** Bad Request Response */
export type Bad_Request_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
};

/** Forbidden Response */
export type Forbidden_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type getAdminDivisionUsingGET_response = Populated_Place_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

/** Populated-place details response */
export type Populated_Place_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  data?: Maybe<Populated_Place_Details>;
};

/** Full populated-place details */
export type Populated_Place_Details = {
  /** The city name (legacy) */
  city?: Maybe<Scalars['String']['output']>;
  /** The country name (varies by languageCode) */
  country?: Maybe<Scalars['String']['output']>;
  /** The ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** If this place has been soft-deleted */
  deleted?: Maybe<Scalars['Boolean']['output']>;
  /** The place elevation (meters) above sea level */
  elevationMeters?: Maybe<Scalars['Int']['output']>;
  /** The place GeoDB native id */
  id?: Maybe<Scalars['Int']['output']>;
  /** The place latittude (-90.0 to 90.0) */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The place longitude (-180.0 to 180.0) */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** The place name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The place population */
  population?: Maybe<Scalars['Int']['output']>;
  /** The region name (varies by languageCode) */
  region?: Maybe<Scalars['String']['output']>;
  /** The ISO or FIPS region code */
  regionCode?: Maybe<Scalars['String']['output']>;
  /** The region Wikidata id */
  regionWdId?: Maybe<Scalars['String']['output']>;
  /** The place timezone id */
  timezone?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PopulatedPlaceType>;
  /** The place WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/** Not Found Response */
export type Not_Found_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type findCitiesNearAdminDivisionUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type findDivisionsNearAdminDivisionUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type findPlacesNearAdminDivisionUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type findCitiesUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response;

export type findCitiesNearCityUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type findDivisionsNearCityUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type findPlacesNearCityUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type getCityUsingGET_response = Populated_Place_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type getCityDistanceUsingGET_response = Distance_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

/** A decimal distance (in miles or kilometers) */
export type Distance_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  /** The distance in units as set by the distanceUnit param (defaults to miles) */
  data?: Maybe<Scalars['Float']['output']>;
};

export type getCityDateTimeUsingGET_response = Date_Time_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

/** An ISO-6801 date-time response */
export type Date_Time_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  /** The date-time in ISO-6801 format: yyyyMMdd'T'HHmmssZ */
  data?: Maybe<Scalars['DateTime']['output']>;
};

export type getCityLocatedInUsingGET_response = Populated_Place_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type getCityTimeUsingGET_response = Time_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

/** An ISO-8601 time response */
export type Time_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  /** The time in ISO-8601 format: HHmmss.SSSZ */
  data?: Maybe<Scalars['String']['output']>;
};

export type getCountriesUsingGET_response = Countries_Response | Bad_Request_Response | Forbidden_Response;

/** A list of countries */
export type Countries_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Country_Summary>>>;
};

/** Minimal country info */
export type Country_Summary = {
  /** The ISO-3166 country code */
  code?: Maybe<Scalars['String']['output']>;
  /** A list of supported ISO-4217 currency codes */
  currencyCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The country name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The country WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

export type getCountryUsingGET_response = Country_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

/** Country details response */
export type Country_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  data?: Maybe<Country_Details>;
};

/** Full country details */
export type Country_Details = {
  /** The ISO-3166 country code */
  code?: Maybe<Scalars['String']['output']>;
  /** The country dialing prefix */
  callingCode?: Maybe<Scalars['String']['output']>;
  /** A list of supported ISO-4217 currency codes */
  currencyCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The country flag image */
  flagImageUri?: Maybe<Scalars['String']['output']>;
  /** The country name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of regions in this country */
  numRegions?: Maybe<Scalars['Int']['output']>;
  /** The country WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

export type findCountryPlacesUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type getRegionsUsingGET_response = Country_Regions_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

/** A list of country regions */
export type Country_Regions_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  /** A list of RegionSummaries */
  data?: Maybe<Array<Maybe<Country_Region_Summary>>>;
};

/** Minimal country region info */
export type Country_Region_Summary = {
  /** An ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The FIPS 10-4 region code */
  fipsCode?: Maybe<Scalars['String']['output']>;
  /** The ISO region code */
  isoCode?: Maybe<Scalars['String']['output']>;
  /** The region name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The region WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

export type getRegionUsingGET_response = Country_Region_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

/** Country region details response */
export type Country_Region_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  data?: Maybe<Country_Region_Details>;
};

/** Full country region details */
export type Country_Region_Details = {
  /** The region's capital city (varies by languageCode) */
  capital?: Maybe<Scalars['String']['output']>;
  /** An ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The FIPS 10-4 region code */
  fipsCode?: Maybe<Scalars['String']['output']>;
  /** The ISO region code */
  isoCode?: Maybe<Scalars['String']['output']>;
  /** The region name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of cities in this region */
  numCities?: Maybe<Scalars['Int']['output']>;
  /** The region WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

export type findRegionDivisionsUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type findRegionCitiesUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type findRegionPlacesUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type findCitiesNearLocationUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response;

export type findDivisionsNearLocationUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response;

export type findPlacesNearLocationUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response;

export type findPlacesUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response;

export type findPlacesNearPlaceUsingGET_response = Populated_Places_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type getPlaceUsingGET_response = Populated_Place_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type getPlaceDistanceUsingGET_response = Distance_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type getPlaceDateTimeUsingGET_response = Date_Time_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type getPlaceLocatedInUsingGET_response = Populated_Place_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type getPlaceTimeUsingGET_response = Time_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type getCurrenciesUsingGET_response = Currencies_Response | Bad_Request_Response | Forbidden_Response;

/** A list of currencies */
export type Currencies_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Currency>>>;
};

/** Currency info */
export type Currency = {
  /** The ISO-4217 currency code */
  code?: Maybe<Scalars['String']['output']>;
  /** A list of ISO-3166 country codes of countries supporting this currency */
  countryCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The currency symbol */
  symbol?: Maybe<Scalars['String']['output']>;
};

export type getLanguagesUsingGET_response = Languages_Response | Bad_Request_Response | Forbidden_Response;

/** A list of languages supported by the system */
export type Languages_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Language>>>;
};

/** A language supported by the service */
export type Language = {
  code?: Maybe<query_getLanguagesUsingGET_oneOf_0_allOf_1_data_items_code>;
  name?: Maybe<Scalars['String']['output']>;
};

export type query_getLanguagesUsingGET_oneOf_0_allOf_1_data_items_code =
  | 'undefined'
  | 'aa'
  | 'ab'
  | 'ae'
  | 'af'
  | 'ak'
  | 'am'
  | 'an'
  | 'ar'
  | 'as'
  | 'av'
  | 'ay'
  | 'az'
  | 'ba'
  | 'be'
  | 'bg'
  | 'bh'
  | 'bi'
  | 'bm'
  | 'bn'
  | 'bo'
  | 'br'
  | 'bs'
  | 'ca'
  | 'ce'
  | 'ch'
  | 'co'
  | 'cr'
  | 'cs'
  | 'cu'
  | 'cv'
  | 'cy'
  | 'da'
  | 'de'
  | 'dv'
  | 'dz'
  | 'ee'
  | 'el'
  | 'en'
  | 'eo'
  | 'es'
  | 'et'
  | 'eu'
  | 'fa'
  | 'ff'
  | 'fi'
  | 'fj'
  | 'fo'
  | 'fr'
  | 'fy'
  | 'ga'
  | 'gd'
  | 'gl'
  | 'gn'
  | 'gu'
  | 'gv'
  | 'ha'
  | 'he'
  | 'hi'
  | 'ho'
  | 'hr'
  | 'ht'
  | 'hu'
  | 'hy'
  | 'hz'
  | 'ia'
  | 'id'
  | 'ie'
  | 'ig'
  | 'ii'
  | 'ik'
  | 'io'
  | 'is'
  | 'it'
  | 'iu'
  | 'ja'
  | 'jv'
  | 'ka'
  | 'kg'
  | 'ki'
  | 'kj'
  | 'kk'
  | 'kl'
  | 'km'
  | 'kn'
  | 'ko'
  | 'kr'
  | 'ks'
  | 'ku'
  | 'kv'
  | 'kw'
  | 'ky'
  | 'la'
  | 'lb'
  | 'lg'
  | 'li'
  | 'ln'
  | 'lo'
  | 'lt'
  | 'lu'
  | 'lv'
  | 'mg'
  | 'mh'
  | 'mi'
  | 'mk'
  | 'ml'
  | 'mn'
  | 'mr'
  | 'ms'
  | 'mt'
  | 'my'
  | 'na'
  | 'nb'
  | 'nd'
  | 'ne'
  | 'ng'
  | 'nl'
  | 'nn'
  | 'no'
  | 'nr'
  | 'nv'
  | 'ny'
  | 'oc'
  | 'oj'
  | 'om'
  | 'or'
  | 'os'
  | 'pa'
  | 'pi'
  | 'pl'
  | 'ps'
  | 'pt'
  | 'qu'
  | 'rm'
  | 'rn'
  | 'ro'
  | 'ru'
  | 'rw'
  | 'sa'
  | 'sc'
  | 'sd'
  | 'se'
  | 'sg'
  | 'si'
  | 'sk'
  | 'sl'
  | 'sm'
  | 'sn'
  | 'so'
  | 'sq'
  | 'sr'
  | 'ss'
  | 'st'
  | 'su'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'tg'
  | 'th'
  | 'ti'
  | 'tk'
  | 'tl'
  | 'tn'
  | 'to'
  | 'tr'
  | 'ts'
  | 'tt'
  | 'tw'
  | 'ty'
  | 'ug'
  | 'uk'
  | 'ur'
  | 'uz'
  | 've'
  | 'vi'
  | 'vo'
  | 'wa'
  | 'wo'
  | 'xh'
  | 'yi'
  | 'yo'
  | 'za'
  | 'zh'
  | 'zu';

export type getLocalesUsingGET_response = Locales_Response | Bad_Request_Response | Forbidden_Response;

/** A list of locales */
export type Locales_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Locale>>>;
};

/** A locale representing a language/region combination */
export type Locale = {
  /** The locale code */
  code?: Maybe<Scalars['String']['output']>;
};

export type getTimezonesUsingGET_response = Time_Zones_Response | Bad_Request_Response | Forbidden_Response;

/** A list of time-zones */
export type Time_Zones_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Time_Zone>>>;
};

/** A time-zone */
export type Time_Zone = {
  /** The time-zone id */
  id?: Maybe<Scalars['String']['output']>;
  /** The time-zone name */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of hours this time-zone is offset from UTC */
  rawUtcOffsetHours?: Maybe<Scalars['Int']['output']>;
};

export type getTimeZoneUsingGET_response = Time_Zone_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

/** A time-zone */
export type Time_Zone_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  /** The time-zone id */
  id?: Maybe<Scalars['String']['output']>;
  /** The time-zone name */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of hours this time-zone is offset from UTC */
  rawUtcOffsetHours?: Maybe<Scalars['Int']['output']>;
};

export type getTimeZoneDateTimeUsingGET_response = Date_Time_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type getTimeZoneTimeUsingGET_response = Time_Response | Bad_Request_Response | Forbidden_Response | Not_Found_Response;

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  findAdminDivisionsUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response );
  getAdminDivisionUsingGET_response: ( Populated_Place_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  findCitiesNearAdminDivisionUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  findDivisionsNearAdminDivisionUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  findPlacesNearAdminDivisionUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  findCitiesUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response );
  findCitiesNearCityUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  findDivisionsNearCityUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  findPlacesNearCityUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getCityUsingGET_response: ( Populated_Place_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getCityDistanceUsingGET_response: ( Distance_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getCityDateTimeUsingGET_response: ( Date_Time_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getCityLocatedInUsingGET_response: ( Populated_Place_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getCityTimeUsingGET_response: ( Time_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getCountriesUsingGET_response: ( Countries_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response );
  getCountryUsingGET_response: ( Country_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  findCountryPlacesUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getRegionsUsingGET_response: ( Country_Regions_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getRegionUsingGET_response: ( Country_Region_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  findRegionDivisionsUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  findRegionCitiesUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  findRegionPlacesUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  findCitiesNearLocationUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response );
  findDivisionsNearLocationUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response );
  findPlacesNearLocationUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response );
  findPlacesUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response );
  findPlacesNearPlaceUsingGET_response: ( Populated_Places_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getPlaceUsingGET_response: ( Populated_Place_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getPlaceDistanceUsingGET_response: ( Distance_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getPlaceDateTimeUsingGET_response: ( Date_Time_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getPlaceLocatedInUsingGET_response: ( Populated_Place_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getPlaceTimeUsingGET_response: ( Time_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getCurrenciesUsingGET_response: ( Currencies_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response );
  getLanguagesUsingGET_response: ( Languages_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response );
  getLocalesUsingGET_response: ( Locales_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response );
  getTimezonesUsingGET_response: ( Time_Zones_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response );
  getTimeZoneUsingGET_response: ( Time_Zone_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getTimeZoneDateTimeUsingGET_response: ( Date_Time_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
  getTimeZoneTimeUsingGET_response: ( Time_Response ) | ( Bad_Request_Response ) | ( Forbidden_Response ) | ( Not_Found_Response );
}>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  query_breweries_items: ResolverTypeWrapper<query_breweries_items>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Void: ResolverTypeWrapper<Scalars['Void']['output']>;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']['output']>;
  HTTPMethod: HTTPMethod;
  findAdminDivisionsUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findAdminDivisionsUsingGET_response']>;
  Populated_Places_Response: ResolverTypeWrapper<Populated_Places_Response>;
  Error: ResolverTypeWrapper<Error>;
  ErrorCode: ErrorCode;
  Link: ResolverTypeWrapper<Link>;
  Metadata: ResolverTypeWrapper<Metadata>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  PopulatedPlaceSummary: ResolverTypeWrapper<PopulatedPlaceSummary>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PopulatedPlaceType: PopulatedPlaceType;
  Bad_Request_Response: ResolverTypeWrapper<Bad_Request_Response>;
  Forbidden_Response: ResolverTypeWrapper<Forbidden_Response>;
  getAdminDivisionUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getAdminDivisionUsingGET_response']>;
  Populated_Place_Response: ResolverTypeWrapper<Populated_Place_Response>;
  Populated_Place_Details: ResolverTypeWrapper<Populated_Place_Details>;
  Not_Found_Response: ResolverTypeWrapper<Not_Found_Response>;
  findCitiesNearAdminDivisionUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findCitiesNearAdminDivisionUsingGET_response']>;
  findDivisionsNearAdminDivisionUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findDivisionsNearAdminDivisionUsingGET_response']>;
  findPlacesNearAdminDivisionUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findPlacesNearAdminDivisionUsingGET_response']>;
  findCitiesUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findCitiesUsingGET_response']>;
  findCitiesNearCityUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findCitiesNearCityUsingGET_response']>;
  findDivisionsNearCityUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findDivisionsNearCityUsingGET_response']>;
  findPlacesNearCityUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findPlacesNearCityUsingGET_response']>;
  getCityUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getCityUsingGET_response']>;
  getCityDistanceUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getCityDistanceUsingGET_response']>;
  Distance_Response: ResolverTypeWrapper<Distance_Response>;
  getCityDateTimeUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getCityDateTimeUsingGET_response']>;
  Date_Time_Response: ResolverTypeWrapper<Date_Time_Response>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  getCityLocatedInUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getCityLocatedInUsingGET_response']>;
  getCityTimeUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getCityTimeUsingGET_response']>;
  Time_Response: ResolverTypeWrapper<Time_Response>;
  getCountriesUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getCountriesUsingGET_response']>;
  Countries_Response: ResolverTypeWrapper<Countries_Response>;
  Country_Summary: ResolverTypeWrapper<Country_Summary>;
  getCountryUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getCountryUsingGET_response']>;
  Country_Response: ResolverTypeWrapper<Country_Response>;
  Country_Details: ResolverTypeWrapper<Country_Details>;
  findCountryPlacesUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findCountryPlacesUsingGET_response']>;
  getRegionsUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getRegionsUsingGET_response']>;
  Country_Regions_Response: ResolverTypeWrapper<Country_Regions_Response>;
  Country_Region_Summary: ResolverTypeWrapper<Country_Region_Summary>;
  getRegionUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getRegionUsingGET_response']>;
  Country_Region_Response: ResolverTypeWrapper<Country_Region_Response>;
  Country_Region_Details: ResolverTypeWrapper<Country_Region_Details>;
  findRegionDivisionsUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findRegionDivisionsUsingGET_response']>;
  findRegionCitiesUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findRegionCitiesUsingGET_response']>;
  findRegionPlacesUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findRegionPlacesUsingGET_response']>;
  findCitiesNearLocationUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findCitiesNearLocationUsingGET_response']>;
  findDivisionsNearLocationUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findDivisionsNearLocationUsingGET_response']>;
  findPlacesNearLocationUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findPlacesNearLocationUsingGET_response']>;
  findPlacesUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findPlacesUsingGET_response']>;
  findPlacesNearPlaceUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['findPlacesNearPlaceUsingGET_response']>;
  getPlaceUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getPlaceUsingGET_response']>;
  getPlaceDistanceUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getPlaceDistanceUsingGET_response']>;
  getPlaceDateTimeUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getPlaceDateTimeUsingGET_response']>;
  getPlaceLocatedInUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getPlaceLocatedInUsingGET_response']>;
  getPlaceTimeUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getPlaceTimeUsingGET_response']>;
  getCurrenciesUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getCurrenciesUsingGET_response']>;
  Currencies_Response: ResolverTypeWrapper<Currencies_Response>;
  Currency: ResolverTypeWrapper<Currency>;
  getLanguagesUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getLanguagesUsingGET_response']>;
  Languages_Response: ResolverTypeWrapper<Languages_Response>;
  Language: ResolverTypeWrapper<Language>;
  query_getLanguagesUsingGET_oneOf_0_allOf_1_data_items_code: query_getLanguagesUsingGET_oneOf_0_allOf_1_data_items_code;
  getLocalesUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getLocalesUsingGET_response']>;
  Locales_Response: ResolverTypeWrapper<Locales_Response>;
  Locale: ResolverTypeWrapper<Locale>;
  getTimezonesUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getTimezonesUsingGET_response']>;
  Time_Zones_Response: ResolverTypeWrapper<Time_Zones_Response>;
  Time_Zone: ResolverTypeWrapper<Time_Zone>;
  getTimeZoneUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getTimeZoneUsingGET_response']>;
  Time_Zone_Response: ResolverTypeWrapper<Time_Zone_Response>;
  getTimeZoneDateTimeUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getTimeZoneDateTimeUsingGET_response']>;
  getTimeZoneTimeUsingGET_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['getTimeZoneTimeUsingGET_response']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ResolveToSourceArgs: ResolverTypeWrapper<Scalars['ResolveToSourceArgs']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  query_breweries_items: query_breweries_items;
  String: Scalars['String']['output'];
  Void: Scalars['Void']['output'];
  URL: Scalars['URL']['output'];
  Boolean: Scalars['Boolean']['output'];
  ObjMap: Scalars['ObjMap']['output'];
  findAdminDivisionsUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findAdminDivisionsUsingGET_response'];
  Populated_Places_Response: Populated_Places_Response;
  Error: Error;
  Link: Link;
  Metadata: Metadata;
  BigInt: Scalars['BigInt']['output'];
  PopulatedPlaceSummary: PopulatedPlaceSummary;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Bad_Request_Response: Bad_Request_Response;
  Forbidden_Response: Forbidden_Response;
  getAdminDivisionUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getAdminDivisionUsingGET_response'];
  Populated_Place_Response: Populated_Place_Response;
  Populated_Place_Details: Populated_Place_Details;
  Not_Found_Response: Not_Found_Response;
  findCitiesNearAdminDivisionUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findCitiesNearAdminDivisionUsingGET_response'];
  findDivisionsNearAdminDivisionUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findDivisionsNearAdminDivisionUsingGET_response'];
  findPlacesNearAdminDivisionUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findPlacesNearAdminDivisionUsingGET_response'];
  findCitiesUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findCitiesUsingGET_response'];
  findCitiesNearCityUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findCitiesNearCityUsingGET_response'];
  findDivisionsNearCityUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findDivisionsNearCityUsingGET_response'];
  findPlacesNearCityUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findPlacesNearCityUsingGET_response'];
  getCityUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getCityUsingGET_response'];
  getCityDistanceUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getCityDistanceUsingGET_response'];
  Distance_Response: Distance_Response;
  getCityDateTimeUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getCityDateTimeUsingGET_response'];
  Date_Time_Response: Date_Time_Response;
  DateTime: Scalars['DateTime']['output'];
  getCityLocatedInUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getCityLocatedInUsingGET_response'];
  getCityTimeUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getCityTimeUsingGET_response'];
  Time_Response: Time_Response;
  getCountriesUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getCountriesUsingGET_response'];
  Countries_Response: Countries_Response;
  Country_Summary: Country_Summary;
  getCountryUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getCountryUsingGET_response'];
  Country_Response: Country_Response;
  Country_Details: Country_Details;
  findCountryPlacesUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findCountryPlacesUsingGET_response'];
  getRegionsUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getRegionsUsingGET_response'];
  Country_Regions_Response: Country_Regions_Response;
  Country_Region_Summary: Country_Region_Summary;
  getRegionUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getRegionUsingGET_response'];
  Country_Region_Response: Country_Region_Response;
  Country_Region_Details: Country_Region_Details;
  findRegionDivisionsUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findRegionDivisionsUsingGET_response'];
  findRegionCitiesUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findRegionCitiesUsingGET_response'];
  findRegionPlacesUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findRegionPlacesUsingGET_response'];
  findCitiesNearLocationUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findCitiesNearLocationUsingGET_response'];
  findDivisionsNearLocationUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findDivisionsNearLocationUsingGET_response'];
  findPlacesNearLocationUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findPlacesNearLocationUsingGET_response'];
  findPlacesUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findPlacesUsingGET_response'];
  findPlacesNearPlaceUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['findPlacesNearPlaceUsingGET_response'];
  getPlaceUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getPlaceUsingGET_response'];
  getPlaceDistanceUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getPlaceDistanceUsingGET_response'];
  getPlaceDateTimeUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getPlaceDateTimeUsingGET_response'];
  getPlaceLocatedInUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getPlaceLocatedInUsingGET_response'];
  getPlaceTimeUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getPlaceTimeUsingGET_response'];
  getCurrenciesUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getCurrenciesUsingGET_response'];
  Currencies_Response: Currencies_Response;
  Currency: Currency;
  getLanguagesUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getLanguagesUsingGET_response'];
  Languages_Response: Languages_Response;
  Language: Language;
  getLocalesUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getLocalesUsingGET_response'];
  Locales_Response: Locales_Response;
  Locale: Locale;
  getTimezonesUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getTimezonesUsingGET_response'];
  Time_Zones_Response: Time_Zones_Response;
  Time_Zone: Time_Zone;
  getTimeZoneUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getTimeZoneUsingGET_response'];
  Time_Zone_Response: Time_Zone_Response;
  getTimeZoneDateTimeUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getTimeZoneDateTimeUsingGET_response'];
  getTimeZoneTimeUsingGET_response: ResolversUnionTypes<ResolversParentTypes>['getTimeZoneTimeUsingGET_response'];
  ID: Scalars['ID']['output'];
  ResolveToSourceArgs: Scalars['ResolveToSourceArgs']['output'];
}>;

export type globalOptionsDirectiveArgs = {
  sourceName?: Maybe<Scalars['String']['input']>;
  endpoint?: Maybe<Scalars['String']['input']>;
  operationHeaders?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
  queryParams?: Maybe<Scalars['ObjMap']['input']>;
};

export type globalOptionsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = globalOptionsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type httpOperationDirectiveArgs = {
  path?: Maybe<Scalars['String']['input']>;
  operationSpecificHeaders?: Maybe<Scalars['ObjMap']['input']>;
  httpMethod?: Maybe<HTTPMethod>;
  isBinary?: Maybe<Scalars['Boolean']['input']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']['input']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']['input']>;
};

export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type oneOfDirectiveArgs = { };

export type oneOfDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = oneOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type enumDirectiveArgs = {
  value?: Maybe<Scalars['String']['input']>;
};

export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type statusCodeTypeNameDirectiveArgs = {
  typeName?: Maybe<Scalars['String']['input']>;
  statusCode?: Maybe<Scalars['ID']['input']>;
};

export type statusCodeTypeNameDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = statusCodeTypeNameDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type resolveToDirectiveArgs = {
  requiredSelectionSet?: Maybe<Scalars['String']['input']>;
  sourceName: Scalars['String']['input'];
  sourceTypeName: Scalars['String']['input'];
  sourceFieldName: Scalars['String']['input'];
  sourceSelectionSet?: Maybe<Scalars['String']['input']>;
  sourceArgs?: Maybe<Scalars['ResolveToSourceArgs']['input']>;
  keyField?: Maybe<Scalars['String']['input']>;
  keysArg?: Maybe<Scalars['String']['input']>;
  pubsubTopic?: Maybe<Scalars['String']['input']>;
  filterBy?: Maybe<Scalars['String']['input']>;
  additionalArgs?: Maybe<Scalars['ResolveToSourceArgs']['input']>;
  result?: Maybe<Scalars['String']['input']>;
  resultType?: Maybe<Scalars['String']['input']>;
};

export type resolveToDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = resolveToDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  breweries?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_breweries_items']>>>, ParentType, ContextType, Partial<QuerybreweriesArgs>>;
  findAdminDivisions?: Resolver<Maybe<ResolversTypes['findAdminDivisionsUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindAdminDivisionsArgs, 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getAdminDivision?: Resolver<Maybe<ResolversTypes['getAdminDivisionUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetAdminDivisionArgs, 'divisionId'>>;
  findCitiesNearAdminDivision?: Resolver<Maybe<ResolversTypes['findCitiesNearAdminDivisionUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindCitiesNearAdminDivisionArgs, 'divisionId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findDivisionsNearAdminDivision?: Resolver<Maybe<ResolversTypes['findDivisionsNearAdminDivisionUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindDivisionsNearAdminDivisionArgs, 'divisionId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findPlacesNearAdminDivision?: Resolver<Maybe<ResolversTypes['findPlacesNearAdminDivisionUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindPlacesNearAdminDivisionArgs, 'divisionId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findCities?: Resolver<Maybe<ResolversTypes['findCitiesUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindCitiesArgs, 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findCitiesNearCity?: Resolver<Maybe<ResolversTypes['findCitiesNearCityUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindCitiesNearCityArgs, 'cityId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findDivisionsNearCity?: Resolver<Maybe<ResolversTypes['findDivisionsNearCityUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindDivisionsNearCityArgs, 'cityId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findPlacesNearCity?: Resolver<Maybe<ResolversTypes['findPlacesNearCityUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindPlacesNearCityArgs, 'cityId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getCity?: Resolver<Maybe<ResolversTypes['getCityUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetCityArgs, 'cityId'>>;
  getCityDistance?: Resolver<Maybe<ResolversTypes['getCityDistanceUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetCityDistanceArgs, 'cityId' | 'toCityId' | 'distanceUnit'>>;
  getCityDateTime?: Resolver<Maybe<ResolversTypes['getCityDateTimeUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetCityDateTimeArgs, 'cityId'>>;
  getCityLocatedIn?: Resolver<Maybe<ResolversTypes['getCityLocatedInUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetCityLocatedInArgs, 'cityId'>>;
  getCityTime?: Resolver<Maybe<ResolversTypes['getCityTimeUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetCityTimeArgs, 'cityId'>>;
  getCountries?: Resolver<Maybe<ResolversTypes['getCountriesUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetCountriesArgs, 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit'>>;
  getCountry?: Resolver<Maybe<ResolversTypes['getCountryUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetCountryArgs, 'countryId'>>;
  findCountryPlaces?: Resolver<Maybe<ResolversTypes['findCountryPlacesUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindCountryPlacesArgs, 'countryId' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getRegions?: Resolver<Maybe<ResolversTypes['getRegionsUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetRegionsArgs, 'countryId' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit'>>;
  getRegion?: Resolver<Maybe<ResolversTypes['getRegionUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetRegionArgs, 'countryId' | 'regionCode'>>;
  findRegionDivisions?: Resolver<Maybe<ResolversTypes['findRegionDivisionsUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindRegionDivisionsArgs, 'countryId' | 'regionCode' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findRegionCities?: Resolver<Maybe<ResolversTypes['findRegionCitiesUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindRegionCitiesArgs, 'countryId' | 'regionCode' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findRegionPlaces?: Resolver<Maybe<ResolversTypes['findRegionPlacesUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindRegionPlacesArgs, 'countryId' | 'regionCode' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findCitiesNearLocation?: Resolver<Maybe<ResolversTypes['findCitiesNearLocationUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindCitiesNearLocationArgs, 'locationId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findDivisionsNearLocation?: Resolver<Maybe<ResolversTypes['findDivisionsNearLocationUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindDivisionsNearLocationArgs, 'locationId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findPlacesNearLocation?: Resolver<Maybe<ResolversTypes['findPlacesNearLocationUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindPlacesNearLocationArgs, 'locationId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findPlaces?: Resolver<Maybe<ResolversTypes['findPlacesUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindPlacesArgs, 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findPlacesNearPlace?: Resolver<Maybe<ResolversTypes['findPlacesNearPlaceUsingGET_response']>, ParentType, ContextType, RequireFields<QueryfindPlacesNearPlaceArgs, 'placeId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getPlace?: Resolver<Maybe<ResolversTypes['getPlaceUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetPlaceArgs, 'placeId'>>;
  getPlaceDistance?: Resolver<Maybe<ResolversTypes['getPlaceDistanceUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetPlaceDistanceArgs, 'placeId' | 'toPlaceId' | 'distanceUnit'>>;
  getPlaceDateTime?: Resolver<Maybe<ResolversTypes['getPlaceDateTimeUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetPlaceDateTimeArgs, 'placeId'>>;
  getPlaceLocatedIn?: Resolver<Maybe<ResolversTypes['getPlaceLocatedInUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetPlaceLocatedInArgs, 'placeId'>>;
  getPlaceTime?: Resolver<Maybe<ResolversTypes['getPlaceTimeUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetPlaceTimeArgs, 'placeId'>>;
  getCurrencies?: Resolver<Maybe<ResolversTypes['getCurrenciesUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetCurrenciesArgs, 'countryId' | 'hateoasMode' | 'limit'>>;
  getLanguages?: Resolver<Maybe<ResolversTypes['getLanguagesUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetLanguagesArgs, 'hateoasMode' | 'limit'>>;
  getLocales?: Resolver<Maybe<ResolversTypes['getLocalesUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetLocalesArgs, 'hateoasMode' | 'limit'>>;
  getTimezones?: Resolver<Maybe<ResolversTypes['getTimezonesUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetTimezonesArgs, 'hateoasMode' | 'limit'>>;
  getTimeZone?: Resolver<Maybe<ResolversTypes['getTimeZoneUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetTimeZoneArgs, 'zoneId'>>;
  getTimeZoneDateTime?: Resolver<Maybe<ResolversTypes['getTimeZoneDateTimeUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetTimeZoneDateTimeArgs, 'zoneId'>>;
  getTimeZoneTime?: Resolver<Maybe<ResolversTypes['getTimeZoneTimeUsingGET_response']>, ParentType, ContextType, RequireFields<QuerygetTimeZoneTimeArgs, 'zoneId'>>;
}>;

export type query_breweries_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_breweries_items'] = ResolversParentTypes['query_breweries_items']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brewery_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_2?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  address_3?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postal_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website_url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export interface URLScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type findAdminDivisionsUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findAdminDivisionsUsingGET_response'] = ResolversParentTypes['findAdminDivisionsUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response', ParentType, ContextType>;
}>;

export type Populated_Places_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Populated_Places_Response'] = ResolversParentTypes['Populated_Places_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['PopulatedPlaceSummary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = ResolversObject<{
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Metadata'] = ResolversParentTypes['Metadata']> = ResolversObject<{
  currentOffset?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type PopulatedPlaceSummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PopulatedPlaceSummary'] = ResolversParentTypes['PopulatedPlaceSummary']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionWdId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PopulatedPlaceType']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  breweries?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_breweries_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Bad_Request_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bad_Request_Response'] = ResolversParentTypes['Bad_Request_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Forbidden_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Forbidden_Response'] = ResolversParentTypes['Forbidden_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type getAdminDivisionUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getAdminDivisionUsingGET_response'] = ResolversParentTypes['getAdminDivisionUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Place_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type Populated_Place_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Populated_Place_Response'] = ResolversParentTypes['Populated_Place_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Populated_Place_Details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Populated_Place_DetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Populated_Place_Details'] = ResolversParentTypes['Populated_Place_Details']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  elevationMeters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionWdId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PopulatedPlaceType']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Not_Found_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Not_Found_Response'] = ResolversParentTypes['Not_Found_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type findCitiesNearAdminDivisionUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findCitiesNearAdminDivisionUsingGET_response'] = ResolversParentTypes['findCitiesNearAdminDivisionUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type findDivisionsNearAdminDivisionUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findDivisionsNearAdminDivisionUsingGET_response'] = ResolversParentTypes['findDivisionsNearAdminDivisionUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type findPlacesNearAdminDivisionUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findPlacesNearAdminDivisionUsingGET_response'] = ResolversParentTypes['findPlacesNearAdminDivisionUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type findCitiesUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findCitiesUsingGET_response'] = ResolversParentTypes['findCitiesUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response', ParentType, ContextType>;
}>;

export type findCitiesNearCityUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findCitiesNearCityUsingGET_response'] = ResolversParentTypes['findCitiesNearCityUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type findDivisionsNearCityUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findDivisionsNearCityUsingGET_response'] = ResolversParentTypes['findDivisionsNearCityUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type findPlacesNearCityUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findPlacesNearCityUsingGET_response'] = ResolversParentTypes['findPlacesNearCityUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type getCityUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getCityUsingGET_response'] = ResolversParentTypes['getCityUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Place_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type getCityDistanceUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getCityDistanceUsingGET_response'] = ResolversParentTypes['getCityDistanceUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Distance_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type Distance_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Distance_Response'] = ResolversParentTypes['Distance_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type getCityDateTimeUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getCityDateTimeUsingGET_response'] = ResolversParentTypes['getCityDateTimeUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Date_Time_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type Date_Time_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Date_Time_Response'] = ResolversParentTypes['Date_Time_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type getCityLocatedInUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getCityLocatedInUsingGET_response'] = ResolversParentTypes['getCityLocatedInUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Place_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type getCityTimeUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getCityTimeUsingGET_response'] = ResolversParentTypes['getCityTimeUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Time_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type Time_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Response'] = ResolversParentTypes['Time_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type getCountriesUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getCountriesUsingGET_response'] = ResolversParentTypes['getCountriesUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Countries_Response' | 'Bad_Request_Response' | 'Forbidden_Response', ParentType, ContextType>;
}>;

export type Countries_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Countries_Response'] = ResolversParentTypes['Countries_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country_Summary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_SummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Summary'] = ResolversParentTypes['Country_Summary']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type getCountryUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getCountryUsingGET_response'] = ResolversParentTypes['getCountryUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Country_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type Country_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Response'] = ResolversParentTypes['Country_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Country_Details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_DetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Details'] = ResolversParentTypes['Country_Details']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  flagImageUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numRegions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type findCountryPlacesUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findCountryPlacesUsingGET_response'] = ResolversParentTypes['findCountryPlacesUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type getRegionsUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getRegionsUsingGET_response'] = ResolversParentTypes['getRegionsUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Country_Regions_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type Country_Regions_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Regions_Response'] = ResolversParentTypes['Country_Regions_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country_Region_Summary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_Region_SummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Region_Summary'] = ResolversParentTypes['Country_Region_Summary']> = ResolversObject<{
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fipsCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type getRegionUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getRegionUsingGET_response'] = ResolversParentTypes['getRegionUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Country_Region_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type Country_Region_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Region_Response'] = ResolversParentTypes['Country_Region_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Country_Region_Details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_Region_DetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Region_Details'] = ResolversParentTypes['Country_Region_Details']> = ResolversObject<{
  capital?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fipsCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numCities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type findRegionDivisionsUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findRegionDivisionsUsingGET_response'] = ResolversParentTypes['findRegionDivisionsUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type findRegionCitiesUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findRegionCitiesUsingGET_response'] = ResolversParentTypes['findRegionCitiesUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type findRegionPlacesUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findRegionPlacesUsingGET_response'] = ResolversParentTypes['findRegionPlacesUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type findCitiesNearLocationUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findCitiesNearLocationUsingGET_response'] = ResolversParentTypes['findCitiesNearLocationUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response', ParentType, ContextType>;
}>;

export type findDivisionsNearLocationUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findDivisionsNearLocationUsingGET_response'] = ResolversParentTypes['findDivisionsNearLocationUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response', ParentType, ContextType>;
}>;

export type findPlacesNearLocationUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findPlacesNearLocationUsingGET_response'] = ResolversParentTypes['findPlacesNearLocationUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response', ParentType, ContextType>;
}>;

export type findPlacesUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findPlacesUsingGET_response'] = ResolversParentTypes['findPlacesUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response', ParentType, ContextType>;
}>;

export type findPlacesNearPlaceUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['findPlacesNearPlaceUsingGET_response'] = ResolversParentTypes['findPlacesNearPlaceUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Places_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type getPlaceUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getPlaceUsingGET_response'] = ResolversParentTypes['getPlaceUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Place_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type getPlaceDistanceUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getPlaceDistanceUsingGET_response'] = ResolversParentTypes['getPlaceDistanceUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Distance_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type getPlaceDateTimeUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getPlaceDateTimeUsingGET_response'] = ResolversParentTypes['getPlaceDateTimeUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Date_Time_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type getPlaceLocatedInUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getPlaceLocatedInUsingGET_response'] = ResolversParentTypes['getPlaceLocatedInUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Populated_Place_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type getPlaceTimeUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getPlaceTimeUsingGET_response'] = ResolversParentTypes['getPlaceTimeUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Time_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type getCurrenciesUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getCurrenciesUsingGET_response'] = ResolversParentTypes['getCurrenciesUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Currencies_Response' | 'Bad_Request_Response' | 'Forbidden_Response', ParentType, ContextType>;
}>;

export type Currencies_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Currencies_Response'] = ResolversParentTypes['Currencies_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Currency']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrencyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type getLanguagesUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getLanguagesUsingGET_response'] = ResolversParentTypes['getLanguagesUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Languages_Response' | 'Bad_Request_Response' | 'Forbidden_Response', ParentType, ContextType>;
}>;

export type Languages_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Languages_Response'] = ResolversParentTypes['Languages_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LanguageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['query_getLanguagesUsingGET_oneOf_0_allOf_1_data_items_code']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type getLocalesUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getLocalesUsingGET_response'] = ResolversParentTypes['getLocalesUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Locales_Response' | 'Bad_Request_Response' | 'Forbidden_Response', ParentType, ContextType>;
}>;

export type Locales_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Locales_Response'] = ResolversParentTypes['Locales_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Locale']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocaleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Locale'] = ResolversParentTypes['Locale']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type getTimezonesUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getTimezonesUsingGET_response'] = ResolversParentTypes['getTimezonesUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Time_Zones_Response' | 'Bad_Request_Response' | 'Forbidden_Response', ParentType, ContextType>;
}>;

export type Time_Zones_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Zones_Response'] = ResolversParentTypes['Time_Zones_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Time_Zone']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Time_ZoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Zone'] = ResolversParentTypes['Time_Zone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rawUtcOffsetHours?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type getTimeZoneUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getTimeZoneUsingGET_response'] = ResolversParentTypes['getTimeZoneUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Time_Zone_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type Time_Zone_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Zone_Response'] = ResolversParentTypes['Time_Zone_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rawUtcOffsetHours?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type getTimeZoneDateTimeUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getTimeZoneDateTimeUsingGET_response'] = ResolversParentTypes['getTimeZoneDateTimeUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Date_Time_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export type getTimeZoneTimeUsingGET_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getTimeZoneTimeUsingGET_response'] = ResolversParentTypes['getTimeZoneTimeUsingGET_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Time_Response' | 'Bad_Request_Response' | 'Forbidden_Response' | 'Not_Found_Response', ParentType, ContextType>;
}>;

export interface ResolveToSourceArgsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ResolveToSourceArgs'], any> {
  name: 'ResolveToSourceArgs';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  query_breweries_items?: query_breweries_itemsResolvers<ContextType>;
  Void?: GraphQLScalarType;
  URL?: GraphQLScalarType;
  ObjMap?: GraphQLScalarType;
  findAdminDivisionsUsingGET_response?: findAdminDivisionsUsingGET_responseResolvers<ContextType>;
  Populated_Places_Response?: Populated_Places_ResponseResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  PopulatedPlaceSummary?: PopulatedPlaceSummaryResolvers<ContextType>;
  Bad_Request_Response?: Bad_Request_ResponseResolvers<ContextType>;
  Forbidden_Response?: Forbidden_ResponseResolvers<ContextType>;
  getAdminDivisionUsingGET_response?: getAdminDivisionUsingGET_responseResolvers<ContextType>;
  Populated_Place_Response?: Populated_Place_ResponseResolvers<ContextType>;
  Populated_Place_Details?: Populated_Place_DetailsResolvers<ContextType>;
  Not_Found_Response?: Not_Found_ResponseResolvers<ContextType>;
  findCitiesNearAdminDivisionUsingGET_response?: findCitiesNearAdminDivisionUsingGET_responseResolvers<ContextType>;
  findDivisionsNearAdminDivisionUsingGET_response?: findDivisionsNearAdminDivisionUsingGET_responseResolvers<ContextType>;
  findPlacesNearAdminDivisionUsingGET_response?: findPlacesNearAdminDivisionUsingGET_responseResolvers<ContextType>;
  findCitiesUsingGET_response?: findCitiesUsingGET_responseResolvers<ContextType>;
  findCitiesNearCityUsingGET_response?: findCitiesNearCityUsingGET_responseResolvers<ContextType>;
  findDivisionsNearCityUsingGET_response?: findDivisionsNearCityUsingGET_responseResolvers<ContextType>;
  findPlacesNearCityUsingGET_response?: findPlacesNearCityUsingGET_responseResolvers<ContextType>;
  getCityUsingGET_response?: getCityUsingGET_responseResolvers<ContextType>;
  getCityDistanceUsingGET_response?: getCityDistanceUsingGET_responseResolvers<ContextType>;
  Distance_Response?: Distance_ResponseResolvers<ContextType>;
  getCityDateTimeUsingGET_response?: getCityDateTimeUsingGET_responseResolvers<ContextType>;
  Date_Time_Response?: Date_Time_ResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  getCityLocatedInUsingGET_response?: getCityLocatedInUsingGET_responseResolvers<ContextType>;
  getCityTimeUsingGET_response?: getCityTimeUsingGET_responseResolvers<ContextType>;
  Time_Response?: Time_ResponseResolvers<ContextType>;
  getCountriesUsingGET_response?: getCountriesUsingGET_responseResolvers<ContextType>;
  Countries_Response?: Countries_ResponseResolvers<ContextType>;
  Country_Summary?: Country_SummaryResolvers<ContextType>;
  getCountryUsingGET_response?: getCountryUsingGET_responseResolvers<ContextType>;
  Country_Response?: Country_ResponseResolvers<ContextType>;
  Country_Details?: Country_DetailsResolvers<ContextType>;
  findCountryPlacesUsingGET_response?: findCountryPlacesUsingGET_responseResolvers<ContextType>;
  getRegionsUsingGET_response?: getRegionsUsingGET_responseResolvers<ContextType>;
  Country_Regions_Response?: Country_Regions_ResponseResolvers<ContextType>;
  Country_Region_Summary?: Country_Region_SummaryResolvers<ContextType>;
  getRegionUsingGET_response?: getRegionUsingGET_responseResolvers<ContextType>;
  Country_Region_Response?: Country_Region_ResponseResolvers<ContextType>;
  Country_Region_Details?: Country_Region_DetailsResolvers<ContextType>;
  findRegionDivisionsUsingGET_response?: findRegionDivisionsUsingGET_responseResolvers<ContextType>;
  findRegionCitiesUsingGET_response?: findRegionCitiesUsingGET_responseResolvers<ContextType>;
  findRegionPlacesUsingGET_response?: findRegionPlacesUsingGET_responseResolvers<ContextType>;
  findCitiesNearLocationUsingGET_response?: findCitiesNearLocationUsingGET_responseResolvers<ContextType>;
  findDivisionsNearLocationUsingGET_response?: findDivisionsNearLocationUsingGET_responseResolvers<ContextType>;
  findPlacesNearLocationUsingGET_response?: findPlacesNearLocationUsingGET_responseResolvers<ContextType>;
  findPlacesUsingGET_response?: findPlacesUsingGET_responseResolvers<ContextType>;
  findPlacesNearPlaceUsingGET_response?: findPlacesNearPlaceUsingGET_responseResolvers<ContextType>;
  getPlaceUsingGET_response?: getPlaceUsingGET_responseResolvers<ContextType>;
  getPlaceDistanceUsingGET_response?: getPlaceDistanceUsingGET_responseResolvers<ContextType>;
  getPlaceDateTimeUsingGET_response?: getPlaceDateTimeUsingGET_responseResolvers<ContextType>;
  getPlaceLocatedInUsingGET_response?: getPlaceLocatedInUsingGET_responseResolvers<ContextType>;
  getPlaceTimeUsingGET_response?: getPlaceTimeUsingGET_responseResolvers<ContextType>;
  getCurrenciesUsingGET_response?: getCurrenciesUsingGET_responseResolvers<ContextType>;
  Currencies_Response?: Currencies_ResponseResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  getLanguagesUsingGET_response?: getLanguagesUsingGET_responseResolvers<ContextType>;
  Languages_Response?: Languages_ResponseResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  getLocalesUsingGET_response?: getLocalesUsingGET_responseResolvers<ContextType>;
  Locales_Response?: Locales_ResponseResolvers<ContextType>;
  Locale?: LocaleResolvers<ContextType>;
  getTimezonesUsingGET_response?: getTimezonesUsingGET_responseResolvers<ContextType>;
  Time_Zones_Response?: Time_Zones_ResponseResolvers<ContextType>;
  Time_Zone?: Time_ZoneResolvers<ContextType>;
  getTimeZoneUsingGET_response?: getTimeZoneUsingGET_responseResolvers<ContextType>;
  Time_Zone_Response?: Time_Zone_ResponseResolvers<ContextType>;
  getTimeZoneDateTimeUsingGET_response?: getTimeZoneDateTimeUsingGET_responseResolvers<ContextType>;
  getTimeZoneTimeUsingGET_response?: getTimeZoneTimeUsingGET_responseResolvers<ContextType>;
  ResolveToSourceArgs?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  globalOptions?: globalOptionsDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
  oneOf?: oneOfDirectiveResolver<any, any, ContextType>;
  enum?: enumDirectiveResolver<any, any, ContextType>;
  statusCodeTypeName?: statusCodeTypeNameDirectiveResolver<any, any, ContextType>;
  resolveTo?: resolveToDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = OpenBreweryDbTypes.Context & GeoDbTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));