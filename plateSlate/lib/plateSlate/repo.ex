defmodule PlateSlate.Repo do
  use Ecto.Repo,
    otp_app: :plateSlate,
    adapter: Ecto.Adapters.Postgres
end
