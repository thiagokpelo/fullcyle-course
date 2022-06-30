FROM golang:alpine AS builder

WORKDIR $GOPATH/src/mypackage/myapp/

COPY go.mod .
COPY *.go .

RUN go build -o /go/bin/code-education-rocks

FROM scratch

COPY --from=builder /docker/go/bin/code-education-rocks /go/bin/code-education-rocks

ENTRYPOINT ["/go/bin/code-education-rocks"]
