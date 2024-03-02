import { SpotifyApi, type Artist } from '@spotify/web-api-ts-sdk';

import {env} from '@/env/index'

export const spotifyClient = SpotifyApi.withClientCredentials(env.SPOTIFY_CLIENT_ID, env.SPOTIFY_SECRET_ID);