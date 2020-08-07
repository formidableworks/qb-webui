import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainDataSchema, MainDataUpdateSchema } from '../../api/main-data';

const initialState: MainDataSchema = {
  categories: {},
  full_update: true,
  rid: 0,
  server_state: {
    alltime_dl: 0,
    alltime_ul: 0,
    average_time_queue: 0,
    connection_status: '',
    dht_nodes: 0,
    dl_info_data: 0,
    dl_info_speed: 0,
    dl_rate_limit: 0,
    free_space_on_disk: 0,
    global_ratio: '',
    queued_io_jobs: 0,
    queueing: false,
    read_cache_hits: '',
    read_cache_overload: '',
    refresh_interval: 0,
    total_buffers_size: 0,
    total_peer_connections: 0,
    total_queued_size: 0,
    total_wasted_session: 0,
    up_info_data: 0,
    up_info_speed: 0,
    up_rate_limit: 0,
    use_alt_speed_limits: false,
    write_cache_overload: '',
  },
  tags: [],
  torrents: {},
};

export const mainDataSlice = createSlice({
  name: 'mainData',
  initialState,
  reducers: {
    setMainData: (state, action: PayloadAction<MainDataSchema>) => {
      return action.payload;
    },
    updateMainData: (state, { payload }: PayloadAction<MainDataUpdateSchema>) => {
      const mergeState = {
        ...state,
        ...payload,
        server_state: { ...state.server_state, ...payload.server_state },
        categories: { ...state.categories, ...payload.categories },
        torrents: { ...state.torrents, ...payload.torrents },
      };
      return mergeState;
    },
  },
});
