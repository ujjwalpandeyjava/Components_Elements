# Bad code

switch (props.type) {
  case "ADMIN":
    return <Admin />;
  case "USER":
    return <User />;
  default:
    return <NotFound />;
}

# Good code:

const componentMap = {
  ADMIN: Admin,
  USER: User,
  NOT_FOUND: NotFound,
};

const Component = componentMap[props.type];
return <Component />;

# Better code

const componentMap = {
  ADMIN: React.lazy(() => import("./components/Admin")),
  USER: React.lazy(() => import("./components/User")),
  NOT_FOUND: React.lazy(() => import("./components/NotFound")),
};

const Component = componentMap[props.type];
return <Component />;