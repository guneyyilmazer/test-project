import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../store/hooks';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const DataTable = () => {
  const tableRows = useAppSelector((state) => state.config.tableRows);

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Data Table</h1>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Data Table</h1>
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-600">Error loading data: {(error as Error).message}</p>
        </div>
      </div>
    );
  }

  const displayedPosts = data?.slice(0, tableRows) || [];

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Data Table</h1>
      <p className="text-slate-600 mb-6">
        Displaying <strong className="text-blue-600">{tableRows}</strong> rows based on your configuration.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                User ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Body
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {displayedPosts.map((post) => (
              <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                  {post.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {post.userId}
                </td>
                <td className="px-6 py-4 text-sm text-slate-900">
                  {post.title}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {post.body}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {displayedPosts.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          No data to display
        </div>
      )}
    </div>
  );
};

export default DataTable;
