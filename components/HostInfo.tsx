interface HostInfoProps {
  hostName: string;
  yearsHosting: number;
}

const HostInfo = ({ hostName, yearsHosting }: HostInfoProps) => {
  return (
    <section className="flex items-center gap-4 border-b border-gray-200 py-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-2xl">
        👤
      </div>

      <div>
        <h2 className="font-semibold text-gray-900">Hosted by {hostName}</h2>
        <p className="text-sm text-gray-500">
          {yearsHosting} years hosting
        </p>
      </div>
    </section>
  );
};

export default HostInfo;