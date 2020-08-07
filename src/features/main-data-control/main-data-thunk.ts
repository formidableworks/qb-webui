import { apiThunkErrorHandler } from '../../api/common';
import { mainData, mainDataSchema, mainDataUpdateSchema } from '../../api/main-data';
import { AppThunk } from '../../app/store';
import { mainDataSlice } from './main-data-slice';

const { setMainData, updateMainData } = mainDataSlice.actions;

export const mainDataThunk = (requestId: number): AppThunk => async (dispatch) => {
  try {
    const response = await mainData(requestId);
    if (requestId === 0) {
      const data = mainDataSchema.parse(response.data);
      dispatch(setMainData(data));
    } else {
      const updateData = mainDataUpdateSchema.parse(response.data);
      dispatch(updateMainData(updateData));
    }
  } catch (error) {
    apiThunkErrorHandler(error, dispatch);
  }
};
