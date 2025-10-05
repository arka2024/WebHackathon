const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" 
               style={{ animationDuration: '1s' }} />
        </div>
        <p className="text-xl text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
