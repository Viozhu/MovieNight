//@ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CastDetail = {
  __typename?: 'CastDetail';
  character?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int'];
  logo_path?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  origin_country?: Maybe<Scalars['String']>;
};

export type Configurations = {
  __typename?: 'Configurations';
  change_keys?: Maybe<Array<Maybe<Scalars['String']>>>;
  images?: Maybe<ImageConfigurations>;
};

export type CreditCast = {
  __typename?: 'CreditCast';
  character?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  profile_path?: Maybe<Scalars['String']>;
};

export type CreditCrew = {
  __typename?: 'CreditCrew';
  department?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  profile_path?: Maybe<Scalars['String']>;
};

export type Credits = {
  __typename?: 'Credits';
  cast?: Maybe<Array<Maybe<CreditCast>>>;
  crew?: Maybe<Array<Maybe<CreditCrew>>>;
};

export type CrewDetail = {
  __typename?: 'CrewDetail';
  department?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  job?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  original_title?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
};

export type Episode = {
  __typename?: 'Episode';
  air_date?: Maybe<Scalars['String']>;
  episode_number?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  season_number?: Maybe<Scalars['Int']>;
  show_id: Scalars['Int'];
  vote_average: Scalars['Float'];
};

export type Genres = {
  __typename?: 'Genres';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type ImageConfigurations = {
  __typename?: 'ImageConfigurations';
  backdrop_sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  base_url: Scalars['String'];
  logo_sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  poster_sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  profile_sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  secure_base_url: Scalars['String'];
  still_sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Movie = {
  __typename?: 'Movie';
  backdrop_path?: Maybe<Scalars['String']>;
  credits?: Maybe<Credits>;
  genres?: Maybe<Array<Maybe<Genres>>>;
  id: Scalars['Int'];
  imdb_id?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  production_companies?: Maybe<Array<Maybe<Company>>>;
  release_date?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  videos?: Maybe<VideoResults>;
  vote_average: Scalars['Float'];
};

export type Person = {
  __typename?: 'Person';
  also_known_as?: Maybe<Array<Maybe<Scalars['String']>>>;
  biography?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  deathday?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imdb_id?: Maybe<Scalars['String']>;
  movie_credits?: Maybe<PersonCredits>;
  name: Scalars['String'];
  profile_path?: Maybe<Scalars['String']>;
  tv_credits?: Maybe<PersonCredits>;
};

export type PersonCredits = {
  __typename?: 'PersonCredits';
  cast?: Maybe<Array<Maybe<CastDetail>>>;
  crew?: Maybe<Array<Maybe<CrewDetail>>>;
};

export type Query = {
  __typename?: 'Query';
  airingTodayShows: Array<Maybe<Show>>;
  configurations?: Maybe<Configurations>;
  episodeDetail?: Maybe<Episode>;
  movieDetail?: Maybe<Movie>;
  nowPlayingMovies: Array<Maybe<Movie>>;
  personDetail?: Maybe<Person>;
  popularMovies: Array<Maybe<Movie>>;
  popularShows: Array<Maybe<Show>>;
  searchMovie?: Maybe<Array<Maybe<Movie>>>;
  searchPerson?: Maybe<Array<Maybe<Person>>>;
  searchShow?: Maybe<Array<Maybe<Show>>>;
  seasonDetail?: Maybe<Season>;
  showDetail?: Maybe<Show>;
  similarMovies?: Maybe<Array<Maybe<Movie>>>;
  similarShows?: Maybe<Array<Maybe<Show>>>;
  topRatedShows: Array<Maybe<Show>>;
  upcomingMovies: Array<Maybe<Movie>>;
};


export type QueryEpisodeDetailArgs = {
  episodeNumber: Scalars['Int'];
  seasonNumber: Scalars['Int'];
  showId: Scalars['Int'];
};


export type QueryMovieDetailArgs = {
  id: Scalars['Int'];
};


export type QueryPersonDetailArgs = {
  id: Scalars['Int'];
};


export type QuerySearchMovieArgs = {
  term: Scalars['String'];
};


export type QuerySearchPersonArgs = {
  term: Scalars['String'];
};


export type QuerySearchShowArgs = {
  term: Scalars['String'];
};


export type QuerySeasonDetailArgs = {
  seasonNumber: Scalars['Int'];
  showId: Scalars['Int'];
};


export type QueryShowDetailArgs = {
  id: Scalars['Int'];
};


export type QuerySimilarMoviesArgs = {
  id: Scalars['Int'];
};


export type QuerySimilarShowsArgs = {
  id: Scalars['Int'];
};

export type Season = {
  __typename?: 'Season';
  air_date?: Maybe<Scalars['String']>;
  episodes?: Maybe<Array<Maybe<Episode>>>;
  id: Scalars['Int'];
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  season_number?: Maybe<Scalars['Int']>;
};

export type Show = {
  __typename?: 'Show';
  backdrop_path?: Maybe<Scalars['String']>;
  credits?: Maybe<Credits>;
  first_air_date?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Genres>>>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  last_air_date?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  number_of_episodes?: Maybe<Scalars['Int']>;
  number_of_seasons?: Maybe<Scalars['Int']>;
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  seasons?: Maybe<Array<Maybe<Season>>>;
  videos?: Maybe<VideoResults>;
  vote_average: Scalars['Float'];
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['String'];
  iso: Scalars['String'];
  key: Scalars['String'];
  name: Scalars['String'];
  site: Scalars['String'];
  type: Scalars['String'];
};

export type VideoResults = {
  __typename?: 'VideoResults';
  results?: Maybe<Array<Maybe<Video>>>;
};

export type PopularMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type PopularMoviesQuery = { __typename?: 'Query', popularMovies: Array<{ __typename?: 'Movie', id: number, poster_path?: string | null, title: string, vote_average: number, runtime?: number | null, overview?: string | null, production_companies?: Array<{ __typename?: 'Company', name: string, logo_path?: string | null, origin_country?: string | null } | null> | null, videos?: { __typename?: 'VideoResults', results?: Array<{ __typename?: 'Video', site: string, key: string, type: string } | null> | null } | null } | null> };


export const PopularMoviesDocument = `
    query popularMovies {
  popularMovies {
    id
    poster_path
    title
    vote_average
    runtime
    production_companies {
      name
      logo_path
      origin_country
    }
    overview
    videos {
      results {
        site
        key
        type
      }
    }
  }
}
    `;
export const usePopularMoviesQuery = <
      TData = PopularMoviesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: PopularMoviesQueryVariables,
      options?: UseQueryOptions<PopularMoviesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<PopularMoviesQuery, TError, TData>(
      variables === undefined ? ['popularMovies'] : ['popularMovies', variables],
      fetcher<PopularMoviesQuery, PopularMoviesQueryVariables>(client, PopularMoviesDocument, variables, headers),
      options
    );