// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace GeoDbTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  /**
   * Find administrative divisions, filtering by optional criteria. If no criteria are set, you will get back all
   * known divisions.
   *
   */
  findAdminDivisionsUsingGET?: Maybe<findAdminDivisionsUsingGET_response>;
  /**
   * Get administrative division details such as location coordinates, population, and
   * elevation above sea-level (if available).
   *
   */
  getAdminDivisionUsingGET?: Maybe<getAdminDivisionUsingGET_response>;
  /**
   * Find cities near the given administrative division, filtering by optional criteria. If no criteria are set, you
   * will get back all known cities.
   *
   */
  findCitiesNearAdminDivisionUsingGET?: Maybe<findCitiesNearAdminDivisionUsingGET_response>;
  /**
   * Find administrative divisions near the given division, filtering by optional criteria. If no criteria
   * are set, you will get back all known divisions.
   *
   */
  findDivisionsNearAdminDivisionUsingGET?: Maybe<findDivisionsNearAdminDivisionUsingGET_response>;
  /**
   * Find places near the given administrative division, filtering by optional criteria. If no criteria are set, you
   * will get back all known places.
   *
   */
  findPlacesNearAdminDivisionUsingGET?: Maybe<findPlacesNearAdminDivisionUsingGET_response>;
  /**
   * Find cities, filtering by optional criteria. If no criteria are set, you will get back all known cities.
   *
   */
  findCitiesUsingGET?: Maybe<findCitiesUsingGET_response>;
  /**
   * Find cities near the given city, filtering by optional criteria. If no criteria are set, you will get
   * back all cities within the default radius.
   *
   */
  findCitiesNearCityUsingGET?: Maybe<findCitiesNearCityUsingGET_response>;
  /**
   * Find administrative divisions near the given city, filtering by optional criteria. If no criteria are set, you will get
   * back all divisions within the default radius.
   *
   */
  findDivisionsNearCityUsingGET?: Maybe<findDivisionsNearCityUsingGET_response>;
  /**
   * Find places near the given city, filtering by optional criteria. If no criteria are set, you will get
   * back all places within the default radius.
   *
   */
  findPlacesNearCityUsingGET?: Maybe<findPlacesNearCityUsingGET_response>;
  /**
   * Get city details such as location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getCityUsingGET?: Maybe<getCityUsingGET_response>;
  /** Get distance from the given city */
  getCityDistanceUsingGET?: Maybe<getCityDistanceUsingGET_response>;
  /** Get city date-time */
  getCityDateTimeUsingGET?: Maybe<getCityDateTimeUsingGET_response>;
  /**
   * Get the details for the containing populated place (e.g., its county or other administrative division), including location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getCityLocatedInUsingGET?: Maybe<getCityLocatedInUsingGET_response>;
  /** Get city time */
  getCityTimeUsingGET?: Maybe<getCityTimeUsingGET_response>;
  /**
   * Find countries, filtering by optional criteria. If no criteria are set, you will get back all known countries.
   *
   */
  getCountriesUsingGET?: Maybe<getCountriesUsingGET_response>;
  /** Get country details such as number of regions. */
  getCountryUsingGET?: Maybe<getCountryUsingGET_response>;
  /**
   * Get the country's places. The country is omitted in the response.
   *
   */
  findCountryPlacesUsingGET?: Maybe<findCountryPlacesUsingGET_response>;
  /**
   * Get the country's regions. These could be states, provinces, districts, or otherwise major
   * political divisions.
   *
   */
  getRegionsUsingGET?: Maybe<getRegionsUsingGET_response>;
  /** Get country region details such as number of cities. */
  getRegionUsingGET?: Maybe<getRegionUsingGET_response>;
  /**
   * Get country region administrative divisions. The country and region info is omitted in the
   * response.
   *
   */
  findRegionDivisionsUsingGET?: Maybe<findRegionDivisionsUsingGET_response>;
  /**
   * Get country region cities. The country and region info is omitted in the response.
   *
   */
  findRegionCitiesUsingGET?: Maybe<findRegionCitiesUsingGET_response>;
  /**
   * Get country region places. The country and region info is omitted in the response.
   *
   */
  findRegionPlacesUsingGET?: Maybe<findRegionPlacesUsingGET_response>;
  /**
   * Find cities near the given location, filtering by optional criteria. If no criteria are set, you will get back
   * all cities within the default radius.
   *
   */
  findCitiesNearLocationUsingGET?: Maybe<findCitiesNearLocationUsingGET_response>;
  /**
   * Find administrative divisions near the given location, filtering by optional criteria. If no criteria are set,
   * you will get back all divisions within the default radius.
   *
   */
  findDivisionsNearLocationUsingGET?: Maybe<findDivisionsNearLocationUsingGET_response>;
  /**
   * Find places near the given location, filtering by optional criteria. If no criteria are set, you will get back
   * all places within the default radius.
   *
   */
  findPlacesNearLocationUsingGET?: Maybe<findPlacesNearLocationUsingGET_response>;
  /**
   * Find places, filtering by optional criteria. If no criteria are set, you will get back all known places.
   *
   */
  findPlacesUsingGET?: Maybe<findPlacesUsingGET_response>;
  /**
   * Find places near the given place, filtering by optional criteria. If no criteria are set, you will get
   * back all places within the default radius.
   *
   */
  findPlacesNearPlaceUsingGET?: Maybe<findPlacesNearPlaceUsingGET_response>;
  /**
   * Get place details such as location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getPlaceUsingGET?: Maybe<getPlaceUsingGET_response>;
  /** Get distance from the given place */
  getPlaceDistanceUsingGET?: Maybe<getPlaceDistanceUsingGET_response>;
  /** Get place date-time */
  getPlaceDateTimeUsingGET?: Maybe<getPlaceDateTimeUsingGET_response>;
  /**
   * Get the details for the containing populated place (e.g., its county or other administrative division), including location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getPlaceLocatedInUsingGET?: Maybe<getPlaceLocatedInUsingGET_response>;
  /** Get place time */
  getPlaceTimeUsingGET?: Maybe<getPlaceTimeUsingGET_response>;
  /** Find currencies, filtering by optional criteria. If no criteria are set, you will get back all known currencies. */
  getCurrenciesUsingGET?: Maybe<getCurrenciesUsingGET_response>;
  /** Get all supported languages */
  getLanguagesUsingGET?: Maybe<getLanguagesUsingGET_response>;
  /** Get all known locales */
  getLocalesUsingGET?: Maybe<getLocalesUsingGET_response>;
  /** Get all known time-zones */
  getTimezonesUsingGET?: Maybe<getTimezonesUsingGET_response>;
  /** Get time-zone */
  getTimeZoneUsingGET?: Maybe<getTimeZoneUsingGET_response>;
  /** Get time-zone date-time */
  getTimeZoneDateTimeUsingGET?: Maybe<getTimeZoneDateTimeUsingGET_response>;
  /** Get time-zone time */
  getTimeZoneTimeUsingGET?: Maybe<getTimeZoneTimeUsingGET_response>;
};


export type QueryfindAdminDivisionsUsingGETArgs = {
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


export type QuerygetAdminDivisionUsingGETArgs = {
  divisionId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindCitiesNearAdminDivisionUsingGETArgs = {
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


export type QueryfindDivisionsNearAdminDivisionUsingGETArgs = {
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


export type QueryfindPlacesNearAdminDivisionUsingGETArgs = {
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


export type QueryfindCitiesUsingGETArgs = {
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


export type QueryfindCitiesNearCityUsingGETArgs = {
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


export type QueryfindDivisionsNearCityUsingGETArgs = {
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


export type QueryfindPlacesNearCityUsingGETArgs = {
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


export type QuerygetCityUsingGETArgs = {
  cityId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCityDistanceUsingGETArgs = {
  cityId: Scalars['String']['input'];
  toCityId: Scalars['String']['input'];
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCityDateTimeUsingGETArgs = {
  cityId: Scalars['String']['input'];
};


export type QuerygetCityLocatedInUsingGETArgs = {
  cityId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetCityTimeUsingGETArgs = {
  cityId: Scalars['String']['input'];
};


export type QuerygetCountriesUsingGETArgs = {
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


export type QuerygetCountryUsingGETArgs = {
  countryId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindCountryPlacesUsingGETArgs = {
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


export type QuerygetRegionsUsingGETArgs = {
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


export type QuerygetRegionUsingGETArgs = {
  countryId: Scalars['String']['input'];
  regionCode: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfindRegionDivisionsUsingGETArgs = {
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


export type QueryfindRegionCitiesUsingGETArgs = {
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


export type QueryfindRegionPlacesUsingGETArgs = {
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


export type QueryfindCitiesNearLocationUsingGETArgs = {
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


export type QueryfindDivisionsNearLocationUsingGETArgs = {
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


export type QueryfindPlacesNearLocationUsingGETArgs = {
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


export type QueryfindPlacesUsingGETArgs = {
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


export type QueryfindPlacesNearPlaceUsingGETArgs = {
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


export type QuerygetPlaceUsingGETArgs = {
  placeId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetPlaceDistanceUsingGETArgs = {
  placeId: Scalars['String']['input'];
  toPlaceId: Scalars['String']['input'];
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetPlaceDateTimeUsingGETArgs = {
  placeId: Scalars['String']['input'];
};


export type QuerygetPlaceLocatedInUsingGETArgs = {
  placeId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type QuerygetPlaceTimeUsingGETArgs = {
  placeId: Scalars['String']['input'];
};


export type QuerygetCurrenciesUsingGETArgs = {
  countryId: Scalars['String']['input'];
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetLanguagesUsingGETArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetLocalesUsingGETArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetTimezonesUsingGETArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetTimeZoneUsingGETArgs = {
  zoneId: Scalars['String']['input'];
};


export type QuerygetTimeZoneDateTimeUsingGETArgs = {
  zoneId: Scalars['String']['input'];
};


export type QuerygetTimeZoneTimeUsingGETArgs = {
  zoneId: Scalars['String']['input'];
};

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

  export type QuerySdk = {
      /** Find administrative divisions, filtering by optional criteria. If no criteria are set, you will get back all
known divisions.
 **/
  findAdminDivisionsUsingGET: InContextSdkMethod<Query['findAdminDivisionsUsingGET'], QueryfindAdminDivisionsUsingGETArgs, MeshContext>,
  /** Get administrative division details such as location coordinates, population, and
elevation above sea-level (if available).
 **/
  getAdminDivisionUsingGET: InContextSdkMethod<Query['getAdminDivisionUsingGET'], QuerygetAdminDivisionUsingGETArgs, MeshContext>,
  /** Find cities near the given administrative division, filtering by optional criteria. If no criteria are set, you
will get back all known cities.
 **/
  findCitiesNearAdminDivisionUsingGET: InContextSdkMethod<Query['findCitiesNearAdminDivisionUsingGET'], QueryfindCitiesNearAdminDivisionUsingGETArgs, MeshContext>,
  /** Find administrative divisions near the given division, filtering by optional criteria. If no criteria
are set, you will get back all known divisions.
 **/
  findDivisionsNearAdminDivisionUsingGET: InContextSdkMethod<Query['findDivisionsNearAdminDivisionUsingGET'], QueryfindDivisionsNearAdminDivisionUsingGETArgs, MeshContext>,
  /** Find places near the given administrative division, filtering by optional criteria. If no criteria are set, you
will get back all known places.
 **/
  findPlacesNearAdminDivisionUsingGET: InContextSdkMethod<Query['findPlacesNearAdminDivisionUsingGET'], QueryfindPlacesNearAdminDivisionUsingGETArgs, MeshContext>,
  /** Find cities, filtering by optional criteria. If no criteria are set, you will get back all known cities.
 **/
  findCitiesUsingGET: InContextSdkMethod<Query['findCitiesUsingGET'], QueryfindCitiesUsingGETArgs, MeshContext>,
  /** Find cities near the given city, filtering by optional criteria. If no criteria are set, you will get
back all cities within the default radius.
 **/
  findCitiesNearCityUsingGET: InContextSdkMethod<Query['findCitiesNearCityUsingGET'], QueryfindCitiesNearCityUsingGETArgs, MeshContext>,
  /** Find administrative divisions near the given city, filtering by optional criteria. If no criteria are set, you will get
back all divisions within the default radius.
 **/
  findDivisionsNearCityUsingGET: InContextSdkMethod<Query['findDivisionsNearCityUsingGET'], QueryfindDivisionsNearCityUsingGETArgs, MeshContext>,
  /** Find places near the given city, filtering by optional criteria. If no criteria are set, you will get
back all places within the default radius.
 **/
  findPlacesNearCityUsingGET: InContextSdkMethod<Query['findPlacesNearCityUsingGET'], QueryfindPlacesNearCityUsingGETArgs, MeshContext>,
  /** Get city details such as location coordinates, population, and elevation above sea-level
(if available).
 **/
  getCityUsingGET: InContextSdkMethod<Query['getCityUsingGET'], QuerygetCityUsingGETArgs, MeshContext>,
  /** Get distance from the given city **/
  getCityDistanceUsingGET: InContextSdkMethod<Query['getCityDistanceUsingGET'], QuerygetCityDistanceUsingGETArgs, MeshContext>,
  /** Get city date-time **/
  getCityDateTimeUsingGET: InContextSdkMethod<Query['getCityDateTimeUsingGET'], QuerygetCityDateTimeUsingGETArgs, MeshContext>,
  /** Get the details for the containing populated place (e.g., its county or other administrative division), including location coordinates, population, and elevation above sea-level
(if available).
 **/
  getCityLocatedInUsingGET: InContextSdkMethod<Query['getCityLocatedInUsingGET'], QuerygetCityLocatedInUsingGETArgs, MeshContext>,
  /** Get city time **/
  getCityTimeUsingGET: InContextSdkMethod<Query['getCityTimeUsingGET'], QuerygetCityTimeUsingGETArgs, MeshContext>,
  /** Find countries, filtering by optional criteria. If no criteria are set, you will get back all known countries.
 **/
  getCountriesUsingGET: InContextSdkMethod<Query['getCountriesUsingGET'], QuerygetCountriesUsingGETArgs, MeshContext>,
  /** Get country details such as number of regions. **/
  getCountryUsingGET: InContextSdkMethod<Query['getCountryUsingGET'], QuerygetCountryUsingGETArgs, MeshContext>,
  /** Get the country's places. The country is omitted in the response.
 **/
  findCountryPlacesUsingGET: InContextSdkMethod<Query['findCountryPlacesUsingGET'], QueryfindCountryPlacesUsingGETArgs, MeshContext>,
  /** Get the country's regions. These could be states, provinces, districts, or otherwise major
political divisions.
 **/
  getRegionsUsingGET: InContextSdkMethod<Query['getRegionsUsingGET'], QuerygetRegionsUsingGETArgs, MeshContext>,
  /** Get country region details such as number of cities. **/
  getRegionUsingGET: InContextSdkMethod<Query['getRegionUsingGET'], QuerygetRegionUsingGETArgs, MeshContext>,
  /** Get country region administrative divisions. The country and region info is omitted in the
response.
 **/
  findRegionDivisionsUsingGET: InContextSdkMethod<Query['findRegionDivisionsUsingGET'], QueryfindRegionDivisionsUsingGETArgs, MeshContext>,
  /** Get country region cities. The country and region info is omitted in the response.
 **/
  findRegionCitiesUsingGET: InContextSdkMethod<Query['findRegionCitiesUsingGET'], QueryfindRegionCitiesUsingGETArgs, MeshContext>,
  /** Get country region places. The country and region info is omitted in the response.
 **/
  findRegionPlacesUsingGET: InContextSdkMethod<Query['findRegionPlacesUsingGET'], QueryfindRegionPlacesUsingGETArgs, MeshContext>,
  /** Find cities near the given location, filtering by optional criteria. If no criteria are set, you will get back
all cities within the default radius.
 **/
  findCitiesNearLocationUsingGET: InContextSdkMethod<Query['findCitiesNearLocationUsingGET'], QueryfindCitiesNearLocationUsingGETArgs, MeshContext>,
  /** Find administrative divisions near the given location, filtering by optional criteria. If no criteria are set,
you will get back all divisions within the default radius.
 **/
  findDivisionsNearLocationUsingGET: InContextSdkMethod<Query['findDivisionsNearLocationUsingGET'], QueryfindDivisionsNearLocationUsingGETArgs, MeshContext>,
  /** Find places near the given location, filtering by optional criteria. If no criteria are set, you will get back
all places within the default radius.
 **/
  findPlacesNearLocationUsingGET: InContextSdkMethod<Query['findPlacesNearLocationUsingGET'], QueryfindPlacesNearLocationUsingGETArgs, MeshContext>,
  /** Find places, filtering by optional criteria. If no criteria are set, you will get back all known places.
 **/
  findPlacesUsingGET: InContextSdkMethod<Query['findPlacesUsingGET'], QueryfindPlacesUsingGETArgs, MeshContext>,
  /** Find places near the given place, filtering by optional criteria. If no criteria are set, you will get
back all places within the default radius.
 **/
  findPlacesNearPlaceUsingGET: InContextSdkMethod<Query['findPlacesNearPlaceUsingGET'], QueryfindPlacesNearPlaceUsingGETArgs, MeshContext>,
  /** Get place details such as location coordinates, population, and elevation above sea-level
(if available).
 **/
  getPlaceUsingGET: InContextSdkMethod<Query['getPlaceUsingGET'], QuerygetPlaceUsingGETArgs, MeshContext>,
  /** Get distance from the given place **/
  getPlaceDistanceUsingGET: InContextSdkMethod<Query['getPlaceDistanceUsingGET'], QuerygetPlaceDistanceUsingGETArgs, MeshContext>,
  /** Get place date-time **/
  getPlaceDateTimeUsingGET: InContextSdkMethod<Query['getPlaceDateTimeUsingGET'], QuerygetPlaceDateTimeUsingGETArgs, MeshContext>,
  /** Get the details for the containing populated place (e.g., its county or other administrative division), including location coordinates, population, and elevation above sea-level
(if available).
 **/
  getPlaceLocatedInUsingGET: InContextSdkMethod<Query['getPlaceLocatedInUsingGET'], QuerygetPlaceLocatedInUsingGETArgs, MeshContext>,
  /** Get place time **/
  getPlaceTimeUsingGET: InContextSdkMethod<Query['getPlaceTimeUsingGET'], QuerygetPlaceTimeUsingGETArgs, MeshContext>,
  /** Find currencies, filtering by optional criteria. If no criteria are set, you will get back all known currencies. **/
  getCurrenciesUsingGET: InContextSdkMethod<Query['getCurrenciesUsingGET'], QuerygetCurrenciesUsingGETArgs, MeshContext>,
  /** Get all supported languages **/
  getLanguagesUsingGET: InContextSdkMethod<Query['getLanguagesUsingGET'], QuerygetLanguagesUsingGETArgs, MeshContext>,
  /** Get all known locales **/
  getLocalesUsingGET: InContextSdkMethod<Query['getLocalesUsingGET'], QuerygetLocalesUsingGETArgs, MeshContext>,
  /** Get all known time-zones **/
  getTimezonesUsingGET: InContextSdkMethod<Query['getTimezonesUsingGET'], QuerygetTimezonesUsingGETArgs, MeshContext>,
  /** Get time-zone **/
  getTimeZoneUsingGET: InContextSdkMethod<Query['getTimeZoneUsingGET'], QuerygetTimeZoneUsingGETArgs, MeshContext>,
  /** Get time-zone date-time **/
  getTimeZoneDateTimeUsingGET: InContextSdkMethod<Query['getTimeZoneDateTimeUsingGET'], QuerygetTimeZoneDateTimeUsingGETArgs, MeshContext>,
  /** Get time-zone time **/
  getTimeZoneTimeUsingGET: InContextSdkMethod<Query['getTimeZoneTimeUsingGET'], QuerygetTimeZoneTimeUsingGETArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["GeoDB"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
