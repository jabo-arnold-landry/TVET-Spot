export default function MyGrowthSection() {
  return (
    <>
      <div className="grid gap-3 bg-white-solid rounded-md m-4 px-2 py-1 border border-gray-200">
        <strong className="font-bold capitalize justify-self-start">
          My Growth
        </strong>
        <div className="flex items-center justify-between w-full col-span-full">
          <p className="text-azure-34">this week</p>
          <p className="text-green-500">+70pts</p>
        </div>
        <div className="bg-progress rounded-full h-[0.7rem] relative col-span-full">
          <div className="bg-progress-bar absolute w-2/3 h-[90%]"></div>
        </div>
        <button className="text-white bg-primary rounded-[0.422rem] p-2 col-span-full capitalize">
          view full profile
        </button>
      </div>
    </>
  );
}
