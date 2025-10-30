import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setTableRows } from '../store/slices/configSlice';

const TableConfig = () => {
  const dispatch = useAppDispatch();
  const tableRows = useAppSelector((state) => state.config.tableRows);
  const { disablePage1, disableSlider } = useAppSelector((state) => state.featureFlags);

  const handleChange = (value: number) => {
    const clampedValue = Math.min(10, Math.max(1, value));
    dispatch(setTableRows(clampedValue));
  };

  if (disablePage1) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Table Configuration</h1>
        <p className="text-slate-600">This page has been disabled by the administrator.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Table Configuration</h1>
      <p className="text-slate-600 mb-8">Configure the number of rows to display in the data table.</p>

      <div className="space-y-6">
        {!disableSlider && (
          <div className="space-y-2">
            <label htmlFor="slider" className="block text-sm font-medium text-slate-700">
              Slider Input (1-10):
            </label>
            <div className="flex items-center gap-4">
              <input
                id="slider"
                type="range"
                min="1"
                max="10"
                value={tableRows}
                onChange={(e) => handleChange(Number(e.target.value))}
                className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <span className="text-lg font-semibold text-blue-600 w-8 text-center">{tableRows}</span>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="number" className="block text-sm font-medium text-slate-700">
            Number Input (1-10):
          </label>
          <input
            id="number"
            type="number"
            min="1"
            max="10"
            value={tableRows}
            onChange={(e) => handleChange(Number(e.target.value))}
            className="w-32 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-6">
          <p className="text-slate-700">
            Current value: <strong className="text-blue-600">{tableRows}</strong>
          </p>
          <p className="text-sm text-slate-600 mt-1">This value persists across page refreshes.</p>
        </div>
      </div>
    </div>
  );
};

export default TableConfig;
