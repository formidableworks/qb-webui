import { RootState } from '../../app/store';

export const selectRequestId = (state: RootState): number => state.mainData.rid;

interface SpeedInfo {
  uploadRate: number;
  uploadLimit: number;
  upTotal: number;
  downloadRate: number;
  downloadLimit: number;
  downloadTotal: number;
}
export const selectSpeedInfo = (state: RootState): SpeedInfo => ({
  uploadRate: state.mainData.server_state.up_info_speed,
  uploadLimit: state.mainData.server_state.up_rate_limit,
  upTotal: state.mainData.server_state.up_info_data,
  downloadRate: state.mainData.server_state.dl_info_speed,
  downloadLimit: state.mainData.server_state.dl_rate_limit,
  downloadTotal: state.mainData.server_state.dl_info_data,
});
