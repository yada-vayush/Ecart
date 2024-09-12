const NewsLetter = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center ">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-600 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        praesentium, porro quaerat a ipsum dolores minus recusandae labore,
        aliquid fuga esse similique amet, quis neque facilis maiores quod
        dignissimos necessitatibus?
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none bg-slate-200"
          required
        />
        <button
          type="submit"
          className="bg-green-400 text-black text-xs rounded-md px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
