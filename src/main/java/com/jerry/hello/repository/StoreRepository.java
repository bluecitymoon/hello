package com.jerry.hello.repository;

import com.jerry.hello.domain.Store;
import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Store entity.
 */
public interface StoreRepository extends JpaRepository<Store,Long> {

}
