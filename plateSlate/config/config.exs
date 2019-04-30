# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :plateSlate,
  ecto_repos: [PlateSlate.Repo]

# Configures the endpoint
config :plateSlate, PlateSlateWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "bwELI1d1l6lbn3dB9nCPTut3dL7C2GmRqmR2kGZXsiBuxrOEHZU9iDd5kaCn9CiK",
  render_errors: [view: PlateSlateWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: PlateSlate.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
