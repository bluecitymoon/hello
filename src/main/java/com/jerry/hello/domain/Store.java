package com.jerry.hello.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Store.
 */
@Entity
@Table(name = "STORE")
public class Store implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "x")
    private Long x;

    @Column(name = "y")
    private Long y;

    @OneToMany(mappedBy = "store")
    @JsonIgnore
    private Set<Product> productss = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getX() {
        return x;
    }

    public void setX(Long x) {
        this.x = x;
    }

    public Long getY() {
        return y;
    }

    public void setY(Long y) {
        this.y = y;
    }

    public Set<Product> getProductss() {
        return productss;
    }

    public void setProductss(Set<Product> products) {
        this.productss = products;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        Store store = (Store) o;

        if ( ! Objects.equals(id, store.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Store{" +
                "id=" + id +
                ", name='" + name + "'" +
                ", address='" + address + "'" +
                ", x='" + x + "'" +
                ", y='" + y + "'" +
                '}';
    }
}
