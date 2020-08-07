import Axios, { AxiosPromise } from 'axios';
import * as z from 'zod';

const categorySchema = z.object({
  name: z.string(),
  savePath: z.string(),
});

const serverStateSchema = z.object({
  alltime_dl: z.number(),
  alltime_ul: z.number(),
  average_time_queue: z.number(),
  connection_status: z.string(),
  dht_nodes: z.number(),
  dl_info_data: z.number(),
  dl_info_speed: z.number(),
  dl_rate_limit: z.number(),
  free_space_on_disk: z.number(),
  global_ratio: z.string(),
  queued_io_jobs: z.number(),
  queueing: z.boolean(),
  read_cache_hits: z.string(),
  read_cache_overload: z.string(),
  refresh_interval: z.number(),
  total_buffers_size: z.number(),
  total_peer_connections: z.number(),
  total_queued_size: z.number(),
  total_wasted_session: z.number(),
  up_info_data: z.number(),
  up_info_speed: z.number(),
  up_rate_limit: z.number(),
  use_alt_speed_limits: z.boolean(),
  write_cache_overload: z.string(),
});

const torrentSchema = z.object({
  added_on: z.number(),
  amount_left: z.number(),
  auto_tmm: z.boolean(),
  availability: z.number(),
  category: z.string(),
  completed: z.number(),
  completion_on: z.number(),
  dl_limit: z.number(),
  dlspeed: z.number(),
  downloaded: z.number(),
  downloaded_session: z.number(),
  eta: z.number(),
  f_l_piece_prio: z.boolean(),
  force_start: z.boolean(),
  last_activity: z.number(),
  magnet_uri: z.string(),
  max_ratio: z.number(),
  max_seeding_time: z.number(),
  name: z.string(),
  num_complete: z.number(),
  num_incomplete: z.number(),
  num_leechs: z.number(),
  num_seeds: z.number(),
  priority: z.number(),
  progress: z.number(),
  ratio: z.number(),
  ratio_limit: z.number(),
  save_path: z.string(),
  seeding_time_limit: z.number(),
  seen_complete: z.number(),
  seq_dl: z.boolean(),
  size: z.number(),
  state: z.string(),
  super_seeding: z.boolean(),
  tags: z.string(),
  time_active: z.number(),
  total_size: z.number(),
  tracker: z.string(),
  up_limit: z.number(),
  uploaded: z.number(),
  uploaded_session: z.number(),
  upspeed: z.number(),
});

export const mainDataSchema = z.object({
  categories: z.record(categorySchema),
  full_update: z.boolean(),
  rid: z.number(),
  server_state: serverStateSchema,
  tags: z.array(z.string()),
  torrents: z.record(torrentSchema),
});
export type MainDataSchema = z.infer<typeof mainDataSchema>;

export const mainDataUpdateSchema = z.object({
  categories: z.record(categorySchema.partial()).optional(),
  full_update: z.boolean().optional(),
  rid: z.number(),
  server_state: serverStateSchema.partial().optional(),
  tags: z.array(z.string()).optional(),
  torrents: z.record(torrentSchema.partial()).optional(),
});
export type MainDataUpdateSchema = z.infer<typeof mainDataUpdateSchema>;

export const mainData = (rid?: number): AxiosPromise<MainDataSchema> =>
  Axios({
    url: '/api/v2/sync/maindata',
    method: 'GET',
    params: { rid },
  });
