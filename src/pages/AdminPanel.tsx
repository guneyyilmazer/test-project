import { useAppDispatch, useAppSelector } from '../store/hooks';
import { togglePage1, toggleSlider } from '../store/slices/featureFlagsSlice';

const AdminPanel = () => {
  const dispatch = useAppDispatch();
  const { disablePage1, disableSlider } = useAppSelector((state) => state.featureFlags);

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Admin Panel</h1>
      <p className="text-slate-600 mb-8">Manage feature flags for the application.</p>

      <div className="space-y-6">
        <div className="border border-slate-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                Disable Page 1 Entirely
              </h3>
              <p className="text-sm text-slate-600">
                When enabled, the Table Configuration page will show a disabled message.
              </p>
            </div>
            <button
              onClick={() => dispatch(togglePage1())}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                disablePage1 ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  disablePage1 ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Status:</span>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                disablePage1
                  ? 'bg-red-100 text-red-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {disablePage1 ? 'Page Disabled' : 'Page Enabled'}
            </span>
          </div>
        </div>

        <div className="border border-slate-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                Disable Slider Input Only
              </h3>
              <p className="text-sm text-slate-600">
                When enabled, the slider input on Page 1 will be hidden, but the number input will remain.
              </p>
            </div>
            <button
              onClick={() => dispatch(toggleSlider())}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                disableSlider ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  disableSlider ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Status:</span>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                disableSlider
                  ? 'bg-red-100 text-red-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {disableSlider ? 'Slider Disabled' : 'Slider Enabled'}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-md p-4">
        <p className="text-sm text-slate-700">
          <strong>Note:</strong> All feature flag changes persist across page refreshes using Redux Persist.
        </p>
      </div>
    </div>
  );
};

export default AdminPanel;
