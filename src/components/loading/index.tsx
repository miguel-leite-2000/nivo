export function Loading({size="3.5"}) {
  return (
    <div
      data-te-loading-management-init
      data-te-parent-selector="#loading-basic-example"
    >
      <div
        data-te-loading-icon-ref
        className={`inline-block h-${size} w-${size} animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      ></div>
    </div>
  );
}
