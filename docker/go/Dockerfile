FROM golang:alpine AS builder

WORKDIR $GOPATH/src/mypackage/myapp/

COPY go.mod .
COPY *.go .

RUN go build -o /go/bin/code-education

FROM scratch

COPY --from=builder /go/bin/code-education /go/bin/code-education

ENTRYPOINT ["/go/bin/code-education"]
